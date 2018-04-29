//日期格式化函数
Date.prototype.format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    //创建vue实例
var v = new Vue({
    el: "#comment",
    data: {
        //原始用户评论信息
        comments: [{
            username: "张三",
            userimg: "user02.jpg",
            words: "这历史可以啊，不错不错。呵呵！",
            like: 87,
            nolike: 53,
            time: "2017-02-17 09:15:25"
        }, {
            username: "李四",
            userimg: "user01.jpg",
            words: "吃饭去了啊。呵呵！",
            like: 23,
            nolike: 63,
            time: "2017-3-27 10:12:34"
        }, {
            username: "王五",
            userimg: "user03.jpg",
            words: "这评论可以。呵呵！",
            like: 27,
            nolike: 33,
            time: "2017-04-02 03:26:54"
        }],
        //原始用户信息
        users: [{
            username: "zhangsan",
            password: "123456",
            userimg: "user.jpg",
            words: "世界那么大我想去看看。"
        }, {
            username: "zyc",
            password: "123456",
            userimg: "user01.jpg",
            words: "雨过天晴的美好。"
        }, {
            username: "admin",
            password: "123456",
            userimg: "user02.jpg",
            words: "下大雨了，怎么办啊。"
        }],
        //当前用户信息
        currentUser: { username: "", words: "", userimg: "" },
        //登录框显示或隐藏状态
        loginStatus: false,
        //注册框显示或隐藏状态
        registerStatus: false,
        //用户信息栏显示或隐藏状态
        userbarStatus: false,
        //登录注册入口显示或隐藏状态
        lrBtnStatus: true
    },
    methods: {
        //点击登录
        showLogin: function() {
            document.getElementById("login").reset();
            this.loginStatus = true;
            this.registerStatus = false;
        },
        //点击注册
        showregister: function() {
            document.getElementById("register").reset();
            this.loginStatus = false;
            this.registerStatus = true;
        },
        //退出登录
        loginout: function() {
            //清空当前用户数据
            this.currentUser.username = "";
            this.currentUser.words = "";
            this.currentUser.userimg = "";
            alert("退出成功！");
            this.userbarStatus = false;
            //登录或注册入口显示
            this.lrBtnStatus = true;
        },
        //登录遮罩层点击事件
        loginboxClick: function() {
            this.loginStatus = false;
        },
        //注册遮罩层点击事件
        registerboxClick: function() {
            this.registerStatus = false;
        },
        //点击登录或注册框阻止事件冒泡
        stopProp: function(e) {
            e = e || event;
            e.stopPropagation();
        },
        //点赞
        like: function(index) {
            this.comments[index].like++;
        },
        //点踩
        notlike: function(index) {
            this.comments[index].nolike++;
        },
        //登录
        login: function() {
            var username = $(".loginbox").find(".username").val(); //获取用户名
            var psw = $(".loginbox").find(".psw").val() //获取密码
            var flag = false;
            for (var i = 0, len = this.users.length; i < len; i++) {
                //判断用户名密码是否正确
                if (this.users[i].username === username && this.users[i].password === psw) {
                    flag = true;
                    alert("登录成功！");
                    //用户登录框消失
                    this.loginStatus = false;
                    //用户登录信息显示
                    this.userbarStatus = true;
                    //设置用户栏信息
                    this.currentUser.username = this.users[i].username;
                    this.currentUser.words = this.users[i].words;
                    this.currentUser.userimg = this.users[i].userimg;
                    //登录或注册入口消失
                    this.lrBtnStatus = false;
                    break;
                }
            }
            if (!flag) {
                alert("输入的账号或密码不正确！");
                document.getElementById("login").reset();
            }

        },
        //注册
        register: function() {
            var obj = {}; //创建用户账号密码容器
            var flag = false;
            var username = $(".registerbox").find(".username").val(); //获取用户名
            var psw = $(".registerbox").find(".psw").val() //获取密码
                //判断用户名是否存在
            for (var i = 0, len = this.users.length; i < len; i++) {
                if (this.users[i].username === username) {
                    flag = true;
                    alert("该用户名已经被注册！");
                    break;
                }
            }
            if (!flag) {
                if (username == "" || psw == "") {
                    alert("账号和密码不能为空！");
                } else {
                    var randomNum = Math.floor(Math.random() * 5) + 1;
                    //随机生成头像
                    var randomImg = "user0" + randomNum + ".jpg";
                    obj.username = username;
                    obj.password = psw;
                    obj.words = "系统默认标语。"
                    obj.userimg = randomImg;
                    //添加用户信息到用户列表
                    this.users.push(obj);
                    alert("注册成功！");
                    //设置用户信息栏显示
                    this.userbarStatus = true;

                    //设置用户栏信息
                    this.currentUser.username = obj.username;
                    this.currentUser.words = obj.words;
                    this.currentUser.userimg = obj.userimg;
                    //登录或注册入口消失
                    this.lrBtnStatus = false;
                    //重置表单数据
                    document.getElementById("register").reset();
                    //注册框消失
                    this.registerStatus = false;
                }
            }
        },
        //编辑用户心情
        editUserWords: function() {

            var wordsObj = $(".commentbox").find(".userword");
            var edit = wordsObj.attr("contenteditable"); //获取元素的H5可编辑属性

            if (edit == "false") {
                //打开可编辑功能
                wordsObj.attr("contenteditable", "true");
            } else {
                for (var i = 0, len = this.users.length; i < len; i++) {

                    //查找对应用户名
                    if (this.users[i].username === this.currentUser.username) {
                        //改变用户信息里面的words数据
                        this.currentUser.words = $(".commentbox").find(".userword").text();
                        this.users[i].words = this.currentUser.words;
                        //关闭可编辑功能
                        wordsObj.attr("contenteditable", "false");
                        alert("保存成功！");
                    }
                }
            }
        },
        //点击提交评论
        subCommont: function() {
            if (!this.userbarStatus) {
                alert("登录之后才可以评论！");
                this.loginStatus = true;
            } else {
                if ($(".wordsbox textarea").val() == "") {
                    alert("请先填写评论内容！");
                } else {
                    var obj = {}; //评论信息对象的容器
                    obj.username = this.currentUser.username;
                    obj.userimg = this.currentUser.userimg;
                    obj.words = $(".wordsbox textarea").val();
                    obj.like = 0;
                    obj.nolike = 0;
                    obj.time = new Date().format("yyyy-MM-dd hh:mm:ss");

                    //将评论信息压入评论信息列表
                    this.comments.push(obj);
                    alert("评论成功！");
                    $(".wordsbox textarea").val("");
                }
            }
        }
    }
});