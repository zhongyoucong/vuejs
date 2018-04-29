<template>
    <div class="img">
        <div class="wrap" v-show="wrapShow">
            <img :src="imgUrl" alt="蒙版内容">
            <p class="close-btn" @click="closeImg()">X</p>
        </div>
        <h2>图片传过来的id{{imgId}}</h2>
        <h2>图片详情部分</h2>
        <img :src="imgUrl" @click="showWrap()">
    </div>
</template>
<script>
    export default {
        name: "images",
        data (){
            return {
                imgUrl: '',
                imgId: '',
                imgUrl: '',
                wrapShow : false
            }
        },
        created () {
            var data = [{
                    'id':'1',
                    'url': '../../static/img/list01.png',
                    'title': '我是tittle01的标题',
                    'detail': '我是title01的内容简介内容简介内容简介内容简介部分啊。'   
                },{
                    'id': '2',
                    'url': '../../static/img/list02.png',
                    'title': '我是tittle02的标题',
                    'detail': '我是title02的内容简内容简介内容简介内容简介介部分啊。'   
                },{
                    'id': '3',
                    'url': '../../static/img/list03.png',
                    'title': '我是tittle03的标题',
                    'detail': '我是title03的内容简内容简介内容简介内容简介内容简介介部分啊。'   
                },{
                    'id': '4',
                    'url': '../../static/img/list04.png',
                    'title': '我是tittle04的标题',
                    'detail': '我是title04的内容内容简介内容简介内容简介内容简介简介部分啊。'   
                }];
                
            var id = this.$route.params.articleId;
            var _this = this;
            data.forEach(function(val, index){
                if( val.id == id ){
                    _this.imgUrl = val.url;
                    _this.imgId = id;
                }
            });
        },
        methods: {
            closeImg () {
                this.wrapShow = !this.wrapShow;
            },
            showWrap () {
                this.wrapShow = !this.wrapShow;
            }
        }
    }
</script>
<style lang="less" scoped>
    .fonts{
        color:red;
        font-size:25px;
    }
    .wrap{
        position:fixed;
        top:0;
        left:0;
        z-index:9999999999;
        height:100%;
        width:calc(100% - 20px);
        padding:10px;
        background:rgba(10, 10, 10, 0.85);
    }
    .wrap img{
        position:relative;
        margin-top:30%;
        width:100%;
        height:auto;
    }
    .wrap .close-btn{
        .fonts;
        display:block;
        height:60px;
        width:60px;
        margin:20px auto;
        font-size:25px;
        line-height:60px;
        text-align:center;
        background:#fff;
        border-radius:30px;
    }
    .ft12{font-size:20px;color:red;}
    .img{padding:10px;}
    h2{
        margin-bottom:10px;
        font-size:20px;
    }
    .img img{
        height:auto;
        width:100%;
    }
</style>