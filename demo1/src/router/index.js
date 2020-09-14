import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import HelloVue from '@/components/views/HelloVue'
import firstSample from '@/components/views/firstSample'
import BlogPosts from '@/components/views/BlogPosts'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/views/posts',
      name: 'Posts',
      component: BlogPosts
    },
    {
      path: '/views/first',
      name: 'First',
      component: First
    },
    {
      path: '/views/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/views/hellovue',
      name: 'Hello,Vue',
      component: HelloVue
    },
    {
      path: '/views/firstsample',
      name: 'first sample',
      component: firstSample
    }
  ]
})
