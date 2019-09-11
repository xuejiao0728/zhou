/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-10 15:32:03
 * @LastEditTime: 2019-09-10 17:22:04
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }]
})
