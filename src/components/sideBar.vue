<template>
    <div class="side-nav">
        <!-- <ul class="nav-bar">
            <li>
                <a href="#"><i class="el-icon-s-custom"></i>教师管理</a>
            </li>
            <li>
                <a href="#"><i class="el-icon-user-solid"></i>用户管理</a>
            </li>
            <li>
                <a href="#"><i class="el-icon-bank-card"></i>题库管理<i class="el-icon-arrow-down icon-right"></i></a>
                <ul class="submenu">
                    <li><a href="#"><i class="el-icon-document"></i>题目管理</a></li>
                    <li><a href="#"><i class="el-icon-takeaway-box"></i>初始化设置</a></li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="el-icon-edit-outline"></i>测评&阅卷<i class="el-icon-arrow-down icon-right"></i></a>
                <ul class="submenu">
                    <li><a href="#"><i class="el-icon-s-management"></i>评测管理</a></li>
                    <li><a href="#"><i class="el-icon-edit"></i>批阅试卷</a></li>
                </ul>
            </li>
            <li>
                <a href="#"><i class="el-icon-data-analysis"></i>成绩分析</a>
            </li>
            <li>
                <a href="#"><i class="el-icon-coin"></i>财务管理</a>
            </li>
            <li>
                <a href="#"><i class="el-icon-user"></i>管理员管理</a>
            </li>
            <li>
                <a href="#"><i class="el-icon-s-tools"></i>设置</a>
            </li>
        </ul> -->
        <ul class="nav-bar">
            <li v-for="(item,index) in menu" :key="index">
                <a href="javascript:void(0)" @click="menuClick(item, $event)" :class="{'active':activeItem == item }">
                    <i :class="item.iconClass"></i>
                    {{item.name}}
                    <i v-if="item.child && !item.child.expand" class="el-icon-arrow-down icon-right"></i>
                    <i v-if="item.child && item.child.expand" class="el-icon-arrow-up icon-right"></i>
                </a>
                <ul class="submenu" v-if="item.child" v-show="item.child.expand">
                    <li  v-for="(item2,index2) in item.child.list" :key="index2">
                        <a href="javascript:void(0)" @click="menuClick(item2, $event)" :class="{'active':activeItem == item2 }">
                            <i :class="item2.iconClass"></i>
                            {{item2.name}}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    components:{

    },
    data:function(){
        return{
            activeItem: null,
            menu:[
                {
                    name: "教师管理",
                    iconClass: "el-icon-s-custom",
                    url: "/teacherAdmin",
                },
                {
                    name: "用户管理",
                    iconClass: "el-icon-user-solid",
                    url: "/userAdmin",
                },
                {
                    name: "题库管理",
                    iconClass: "el-icon-bank-card",
                    url: "/teacherAdmin",
                    child:{
                        expand: false,
                        list:[{
                            name: "题目管理",
                            iconClass: "el-icon-document",
                            url: "/teacherAdmin",
                        },
                        {
                            name: "初始化设置",
                            iconClass: "el-icon-takeaway-box",
                            url: "/teacherAdmin",
                        }]
                    }
                },
                {
                    name: "测评&阅卷",
                    iconClass: "el-icon-edit-outline",
                    url: "/teacherAdmin",
                    child:{
                        expand: false,
                        list:[{
                            name: "评测管理",
                            iconClass: "el-icon-s-management",
                            url: "/teacherAdmin",
                        },
                        {
                            name: "批阅试卷",
                            iconClass: "el-icon-edit",
                            url: "/teacherAdmin",
                        }]
                    }
                },
                {
                    name: "成绩分析",
                    iconClass: "el-icon-data-analysis",
                    url: "/teacherAdmin",
                },
                {
                    name: "财务管理",
                    iconClass: "el-icon-coin",
                    url: "/teacherAdmin",
                },
                {
                    name: "管理员管理",
                    iconClass: "el-icon-user",
                    url: "/teacherAdmin",
                },
                {
                    name: "设置",
                    iconClass: "el-icon-s-tools",
                    url: "/teacherAdmin",
                },
            ]
        }
    },
    methods:{
        menuClick(item, evt){
            evt.stopPropagation();
            if(!item){
                return;
            }
            if(item.child){
                item.child.expand = !item.child.expand;
            }
            this.activeItem = item;
            // alert(item.url)
            // console.log(this.$router);
            if(this.$router.currentRoute.fullPath != item.url){
                this.$router.push(item.url);
            }
        }
    }
}
</script>
<style scoped>
    ul,li{
        padding:0;
        margin: 0;
        list-style: none;
    }
    .side-nav{
        width:100%;
        height: 100%;
        background-color: #313c56;
        
    }
    .nav-bar{
        padding-top: 20px;
        height: 100%;
        box-sizing: border-box;
    }
    .nav-bar a{
        width: 100%;
        height: 50px;
        color: white;
        line-height: 50px;
        font-size: 18px;
        text-decoration: none;
        box-sizing: border-box;
        padding-left: 22px;
        display: block;
    }
    .nav-bar a:hover{
        background-color: #425278;
    }
    .nav-bar a.active{
        background-color: #20a0ff;
    }
    .nav-bar a i{
        margin-right: 7px;
    }
    .submenu li a{
        padding-left: 44px;
    }
    .icon-right{
        float: right;
        line-height: 50px;
        margin-right: 16px !important;

    }
</style>