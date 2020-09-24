<template>
    <div>
        <div style="padding:20px;">
            <!-- <el-tabs type="border-card">
                <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs> -->
            <div class='top-search'>
                <div class="search-left">
                    <el-input size="medium" v-model="searchInput" placeholder="请输入内容" style="width:400px;"></el-input>
                    <el-button type="primary" size="medium" plain style="margin-left:20px">搜索</el-button>
                </div>
                <div>
                    <el-button type="primary"  size="medium" @click="dialogFormAddVisible = true">添加新教师</el-button>
                </div>
                
            </div>
            <div class="table-w">
                <div>
                    <el-table :data="tableData" border stripe style="width: 100%" class="table-self-header">
                        <el-table-column prop="name" label="教师姓名"></el-table-column>
                        <el-table-column prop="phone" label="手机号码"></el-table-column>
                        <el-table-column prop="subject" label="所任科目"></el-table-column>
                        <el-table-column width="220" label="管理操作">
                            <template slot-scope="scope">
                                <el-button type="danger" @click="handleDel(scope)">删除</el-button>
                                <el-button type="danger" @click="handleForbidden(scope)">禁用</el-button>
                                <el-button type="danger" @click="handleEdit(scope)">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="pagination-div">
                    <el-pagination background layout="prev, pager, next" :total="1000" :page-size="100"></el-pagination>
                </div>
            </div>
        </div>

        <el-dialog title="添加教师信息" :visible.sync="dialogFormAddVisible" >
            <el-form :model="formAdd">
                <el-form-item label="教师姓名" :label-width="formLabelWidth">
                    <el-input v-model="formAdd.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                    <el-input v-model="formAdd.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="所任科目" :label-width="formLabelWidth">
                    <el-select v-model="formAdd.subject" placeholder="请选择所任科目">
                        <el-option label="语文" value="语文"></el-option>
                        <el-option label="数学" value="数学"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormAddVisible = false" size="medium">取 消</el-button>
                <el-button type="primary" @click="confirmAdd($event)" size="medium">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="添加教师信息" :visible.sync="dialogFormAddVisible" >
            <el-form :model="formAdd">
                <el-form-item label="教师姓名" :label-width="formLabelWidth">
                    <el-input v-model="formAdd.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                    <el-input v-model="formAdd.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="所任科目" :label-width="formLabelWidth">
                    <el-select v-model="formAdd.subject" placeholder="请选择所任科目">
                        <el-option label="语文" value="语文"></el-option>
                        <el-option label="数学" value="数学"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormAddVisible = false" size="medium">取 消</el-button>
                <el-button type="primary" @click="confirmAdd($event)" size="medium">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>

import { getTeacherList } from '@/api/teacherUserManage';
export default {
    data: function(){
        return {
            searchInput: "",
            tableData: [{
                name: '姓名1',
                phone: '15023096021',
                subject: '数学'
            },
            {
                name: '姓名2',
                phone: '15023096022',
                subject: '语文'
            },
            {
                name: '姓名3',
                phone: '15023096023',
                subject: '英语'
            }],
            formAdd: {
                name: "",
                phone: "",
                subject: "",
            },
            dialogFormAddVisible: false,
            formLabelWidth: '120px'
        }

    },
    mounted(){
        getTeacherList({}).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    },
    methods:{
        confirmAdd(e){
            this.dialogFormAddVisible = false;
            console.log(this.formAdd);
        },
        handleDel(scope){
            console.log(scope);
        },
        handleForbidden(scope){
            console.log(scope);
        },
        handleEdit(scope){
            console.log(scope);
        },
    },
    filters:{

    }
}
</script>
<style scoped>
    .top-search{
        display: flex;
        justify-content: space-between;
    }
    .search-left {
        display: flex;
        justify-content: space-between;
    }
    .table-w{
        padding: 20px 0;
    }
    .pagination-div{
        padding:20px 0;
        text-align: center;
    }
    .table-self-header .el-table__header tr th{
        background-color: #409eff;
    }
</style>