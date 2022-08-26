<template>
    <div class = "aaaa">
             <p class = "contentBox"
             @mouseover = "popUpWindow"
             @mouseleave = "deleteWindow">{{message}}</p>
             
             <p class = "textBox" v-if = "hoverFlag">{{text}}</p>
          </div>
</template>
<script>
export default {
  name: 'NuxtTutorial',
  props: ["lang", "text"],
  data(){
    return{
        message: this.lang,
        hoverFlag : false,
    }
  },
  methods:{
    popUpWindow(){
        this.hoverFlag = true
    },
    deleteWindow(){
        this.hoverFlag = false
    }
  },
}
</script>
<style>
.contentBox{
    height: 50px;
    width: 300px;
    color: #5d627b;
    background: #e0e0e0;
    border-top: solid 5px #424658;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
    font-size: 25px;
    display:flex;
    justify-content: center;
    cursor: default;
}
.textBox{
    height: 100px;
    width: 300px;
    padding:10px;
    border-top: solid 3px #e0e0e0;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
}
.lang{
  color:#000000;
  font-size: 25px;
  display:flex;
  justify-content: center;
  align-items: center;
}

/*レスポンシブデザイン*/
@media screen and (max-width: 620px){
  .aaaa p{
    width: 60vw;
    
  }
  .contentBox{
    font-size: 2vh;
    height: 5vh;
  }
  .textBox{
    height: 10vh;
  }
}
</style>
