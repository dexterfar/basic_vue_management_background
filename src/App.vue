<template>
  <div id="app" style="height:100%;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function(){
    document.documentElement.style.height = "100%";
  }
}
</script>
  
<style>
  body{
    margin:0;
    padding: 0;
    height: 100%;
  }
</style>
