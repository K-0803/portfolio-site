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
  margin: 0 10px 0 10px;
  cursor: pointer;
}

.square p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5px 15px;
  width: 100px;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  background-color: #cccccc;
  box-shadow: 0 5px 0 #aaaaaa;
  transition: 0.3s;
}

.square p::after {
  content: '';
  width: 5px;
  height: 5px;
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
  transform: rotate(45deg);
}

.square p:hover {
  transform: translateY(3px);
  text-decoration: none;
  box-shadow: 0 2px 0 #aaaaaa;
}

.text{
  text-align: center;
  color:#d3d3d3;
  font-size: 25px;
}

/*レスポンシブデザイン*/
@media screen and (max-width: 490px){
  .square{
    width: 30vw;
    height: 5vh;
  }
  .square p{
    width: 100%;
    padding: 5% 15%;
    font-size: 120%;
  }
  .square p::after{
    display: none;
  }
  .text{
    height:5vh;
  }
}

</style>