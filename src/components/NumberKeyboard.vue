<template>
    <div class="keyboard" :class="{'show':show}">
        <div class="key-area">
            <div class="grigio-numberic-key" v-for="(item,index) in keyList" :key="index" 
                :class="{
                    'transparent':(!item.value || item.value=='DEL'),
                    'del':item.value=='DEL',
                    'login' :item.value=='login' ,
                    'b-1px-t':true,
                    'b-1px-r':(index+1)%3!=0
                }" 
                @click="inputNumber(item.value)"
                v-html="keyText(item.value)">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NumberKeyboard",
        props:{
            show:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                keyList:[
                    {key:1,value:"1"},
                    {key:2,value:"2"},
                    {key:3,value:"3"},
                    {key:4,value:"4"},
                    {key:5,value:"5"},
                    {key:6,value:"6"},
                    {key:7,value:"7"},
                    {key:8,value:"8"},
                    {key:9,value:"9"},
                    {key:"OK",value:"OK"},
                    {key:0,value:"0"},
                    {key:"DEl",value:'DEL'}
                ]
            }
        },
        methods:{
            inputNumber(value){
                if(value){
                    this.$emit("Input",value)
                }
            },
            keyText(key){
                if(key != 'DEL')
                    return key
            }
        }
    }
</script>

<style scoped>
    .transparent {
        visibility: none;
        color : #efeff4 !important;
    }
    .keyboard{
        direction: ltr !important;
        position: fixed;
        left: 0;
        bottom: 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 5000;
        width: 100%;
        background-color: #efeff4;
        -webkit-transition: -webkit-transform .3s;
        transition: -webkit-transform .3s;
        transition: transform .3s;
        transition: transform .3s,-webkit-transform .3s;
    }
    .keyboard.show{
        -webkit-transform: translate(0);
        transform: translate(0);
    }
    .key-area{
       display: flex;
       flex-wrap: wrap; 
       justify-content: flex-end;
    }
    .grigio-numberic-key{
        width:33.3333%;
        height:80px;
        line-height: 80px;
        background:#fff;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size:22px;
        font-weight: 900;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .grigio-numberic-key:active{
        background: #F8F8FF;
    }
    .grigio-numberic-key.transparent{
        background:transparent;
    }
    .grigio-numberic-key.del{
        background-image: url("./../assets/del.png");
        content: '';
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: center center;
        text-indent:-999px;
    }
    .grigio-numberic-key.login{
        background-color: transparent;
    }
    .b-1px,
    .b-1px-t,
    .b-1px-b,
    .b-1px-tb,
    .b-1px-l,
    .b-1px-r {
        position: relative;
    }
    .b-1px:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 1px;
        border: 2px solid #5a5757;
        color: #C7C7C7;
        height: 200%;
        transform-origin: left top;
        transform: scale(0.5);
    }
    .b-1px-t:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 2px solid #5a5757;
        color: #C7C7C7;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    .b-1px-b:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 2px solid #5a5757;
        color: #C7C7C7;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    .b-1px-tb:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 2px solid #5a5757;
        color: #C7C7C7;
        transform-origin: 0 0;
        transform: scaleY(0.5);
    }
    .b-1px-tb:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 2px solid #5a5757;
        color: #C7C7C7;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }
    .b-1px-l:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 2px solid #5a5757;
        color: #C7C7C7;
        transform-origin: 0 0;
        transform: scaleX(0.5);
    }
    .b-1px-r:after {
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-right: 2px solid #5a5757;
        color: #C7C7C7;
        transform-origin: 100% 0;
        transform: scaleX(0.5);
    }
</style>

