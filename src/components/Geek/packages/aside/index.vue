<template>
  <div class="sidebar-container" :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
      {{geekPages}}
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in geekPages" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import getRoute from '@/utils/geek-route'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  name: 'GeekAside',
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar',
      'pages'
    ]),
    geekPages() {
      let routes = getRoute(this.pages)
      console.log('Geek Pages::', routes)
      return [{
        path: '/page-maker/index',
        name: '管理页面',
        meta: {title: "管理页面", icon: "manage"}
      }].concat(routes)
    },
    activeMenu() {
      const { meta, path } = this.$route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path.replace(/\/page-maker\/edit\/(\w+)/, '/preview/$1')
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
