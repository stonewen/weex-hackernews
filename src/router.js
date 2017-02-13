// import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import GroupView from './views/GroupView.vue'
import HotView from './views/HotView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/home', component: HomeView,
      children: [
        { path: '', component: HotView },
        { path: 'group', component: GroupView },
      ]},
    { path: '/article/:url(.*)?', component: ArticleView },
    { path: '/item/:id(\\d+)', component: CommentView },
    { path: '/user/:id', component: UserView },
    { path: '/', redirect: '/home' }
  ]
})
