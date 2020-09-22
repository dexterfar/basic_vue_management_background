<template>
  <div>
    <el-button type="primary" @click="showMsg(1)">主要按钮1</el-button>
    <el-button type="primary" @click="showMsg(2)">主要按钮2</el-button>
    <el-button type="primary" @click="showMsg(3)">主要按钮3</el-button>
    <el-button type="primary" @click="showMsg(4)">主要按钮4</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    showMsg(type) {
        if(type == 1){
            this.toaster.info("test!!!!")
        }
        else if(type == 2){
            this.toaster.success("test!!!!")
        }
        else if(type == 3){
            this.toaster.warning("test!!!!")
        }
        else if(type == 4){
            this.toaster.error("test!!!!")
        }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
