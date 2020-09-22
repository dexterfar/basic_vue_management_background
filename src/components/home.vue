<template>
    <div style="height:100%">
        <v-header></v-header>
        <div class="main-content">
            <div class="sidebar">
                <v-side-bar></v-side-bar>
            </div>
            <div class="main-view">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>
<script>
import vHeader from "./header";
import vSideBar from "./sideBar";
export default {
    name: "home",
    components: {
        vHeader,
        vSideBar,
    },
    data(){
        return{

        }
    },
    methods:{

    },
    filters:{

    },
}
</script>
<style scoped>
    .main-content{
        display: flex;
        align-content: space-between;
        height: calc(100% - 80px);
    }
    .sidebar{
        width:200px;
        height: 100%;
    }
    .main-view {
        width: calc(100% - 200px);
    }
</style>