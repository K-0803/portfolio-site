<template>
<div 
        class = "square"
        :style = "{background: activeColor, content:anyText}"
        @click = "changeColor">
      </div>

</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: ["color1", "text"],
  data(){
    return{
      activeColor: this.color1,
      anyText: this.text,
    }
  },
  methods:{
    changeColor(){
      /* if(this.activeColor === this.color1){
        this.activeColor = this.color2
      }else if(this.activeColor === this.color2){
        this.activeColor = this.color3
      }else{
        this.activeColor = this.color1
      } */
    }
  },
}
</script>

<style>
.square{
  width: 75px;
  height: 50px;
}

</style>