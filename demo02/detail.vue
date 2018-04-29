<template>
    <div class="article">
        <div class="title">
            <h2>接收到的params参数{{$route.params.articleId}}</h2>
            <h2>{{article.title}}</h2>
        </div>
        <div class="img" @click="routerImg(article.id)">
            <img :src="article.url">
        </div>
        <div class="article">
            {{article.detail}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'list',
        data () {
            return {
                article: {
                    'id':'',
                    'url': '',
                    'title': '',
                    'detail': ''
                }
            }
        },
        methods: {
            routerImg (id) {
                console.log(id+"------------");
                //this.$router.push({name:'image', params:{ articleId: id }});
                this.$router.push({ name:'image', params:{ articleId: id }});
            },
            closeImg () {
                this.wrapShow = !this.wrapShow;
            }
        },
        created () {
            var articleId = this.$route.params.articleId;
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
            var _this = this;
            data.forEach(function(item, index){
                console.log(item.id);
                console.log(articleId);
                if(item.id == articleId){
                    _this.article = item;
                }
            });
        }
    }
</script>
<style lang="" scoped>
    .article{
        padding:10px;
    }
    .article .title{
        margin-bottom:10px;
    }
    .article .img img{
        width:100%;
        height:200px;
    }
    .article .content{
        margin-top:10px;
    }
</style>