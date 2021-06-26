import Vue from 'vue'
import VueRouter from 'vue-router'
import TheNavbar from '../views/TheNavbar.vue'
// import TheHome from '../views/TheHome.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navbar',
    component: TheNavbar
  },
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   component: TheHome
  // }
]

const router = new VueRouter({
  routes
})

export default router
