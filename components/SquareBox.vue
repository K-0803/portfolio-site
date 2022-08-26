<template>
<div 
        class = "square"
        :style = "{background: activeColor}"
        @click = "movePage">
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
      /* anyText: this.text, */
    }
  },
  methods:{
    movePage(){
      window.location.href = '#' + this.text;
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

.text{
  text-align: center;
  color:#d3d3d3;
  font-size: 25px;
}

</style>
