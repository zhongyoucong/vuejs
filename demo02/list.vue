<template>
    <div class="list">
        <ul>
            <li v-for="item in listItem" @click="routerLink(item.id)">
                <router-link to="">
                    <img :src="item.url">
                    <h4>{{item.title}}</h4>
                    <p>{{item.detail}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import detail from './detail'
    export default {
        name: 'list',
        data () {
            return {
                listItem: [{
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
                }]
            }
        },
        methods:{
            routerLink(id) {
                this.$router.push({name:'detail', params:{ articleId: id }});
            }
        }
    }
</script>
<style lang="" scoped>
    .list{margin:10px 0;}
    .list ul li{
        padding:10px;
        border-bottom:1px solid #ccc;
    }
    .list ul li::after{
        content:'';
        display:block;
        clear:both;
    }
    .list ul li a{
        text-decoration:none;
        color:#333;
    }
    .list ul li h4{
        font-size:22px;
    }
    .list ul li img{
        float:left;
        display:block;
        height:100px;
        width:100px;
        margin-right:10px;
    }
</style>