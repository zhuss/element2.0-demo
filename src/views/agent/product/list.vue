<template>
  <div class="list">
     <div class="item" v-for="item in 10" :key="item">商品详情{{item}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[]
    }
  }
}
</script>

<style  scoped>
.item{
  width: 100%;
  height: 200px;
  background: #FFF;
  margin-bottom:10px; 
  border-radius:4px; 
  padding: 30px;
  box-sizing: border-box;
}
</style>

