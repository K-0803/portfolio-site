<template>
<div 
        class = "square"
        :style = "{background: activeColor}"
        @click = "MovePage">
        <p class = "text">{{ text }}</p>
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
    MovePage(){
      /* if(this.activeColor === this.color1){
        
      }else if(this.activeColor === this.color2){
        
      }else{
        
      } */
    }
  },
}
</script>

<style>
.square{
  width: 100px;
  height: 40px;
}

.text{
  text-align: center;
  color:#d3d3d3;
  font-size: 25px;
}

</style>
