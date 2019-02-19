<template>
  <div class="main">
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <el-menu :unique-opened=true :router=true>
          <!-- 全局设置 -->
          <el-menu-item index="/settings">
            <i class="el-icon-setting"></i>
            <span slot="title">全局设置</span>
          </el-menu-item>
          <!-- 桌台管理 -->
          <el-submenu index="table">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>桌台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/table/list">所有桌台</el-menu-item>
              <el-menu-item index="/table/add">添加桌台</el-menu-item>
              <el-menu-item index="/table/delete">删除桌台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 菜品类别 -->
          <el-menu-item index="/category/list">
            <i class="el-icon-message"></i>
            <span slot="title">菜品类别</span>
          </el-menu-item>
          <!-- 菜品管理 -->
          <el-submenu index="dish">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>菜品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/dish/list">所有菜品</el-menu-item>
              <el-menu-item index="/dish/add">添加菜品</el-menu-item>
              <el-menu-item index="/dish/delete">删除菜品</el-menu-item>
              <el-menu-item index="/dish/update">修改菜品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 订单列表 -->
          <el-menu-item index="order/list">
            <i class="el-icon-date"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <!-- 安全管理 -->
          <el-menu-item index="/security">
            <i class="el-icon-bell"></i>
            <span slot="title">安全管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部的信息栏 -->
        <el-header height="60px">顶部信息
          
        </el-header>
        <!-- 主体信息 -->
        <el-main>
            主体信息
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
     
    }
  },
  beforeCreate() {
    if(!this.$store.state.adminName){
      this.$router.push('/login')
    }
  },
}
</script>
