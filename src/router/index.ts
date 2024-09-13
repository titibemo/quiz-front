import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'connexion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/liste-utilisateur',
    name: 'listUser',
    beforeEnter: (to, from, next) => {
      let cookie = document.cookie.slice(13);
      fetch('http://localhost:3020/api/users/test', {
        headers: {Authorization: `Bearer ${cookie}`}
    }).then(resp => resp.json()).then(data => {
        console.log(data);
        if(data.role != "admin"){
           window.location.href = "http://localhost:8080";
        }
        else{
            next()
        }})
      
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/ListUserView.vue')
  },
  {
    path: '/enregistrer-utilisateur',
    name: 'register',
    beforeEnter: (to, from, next) => {
      let cookie = document.cookie.slice(13);
      fetch('http://localhost:3020/api/users/test', {
        headers: {Authorization: `Bearer ${cookie}`}
    }).then(resp => resp.json()).then(data => {
        console.log(data);
        if(data.role != "admin"){
           window.location.href = "http://localhost:8080";
        }
        else{
            next()
        }})
      
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogoutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    beforeEnter: (to, from, next) => {
      let cookie = document.cookie.slice(13);
      fetch('http://localhost:3020/api/users/test', {
        headers: {Authorization: `Bearer ${cookie}`}
    }).then(resp => resp.json()).then(data => {
        console.log(data);
        if(data.role != "admin"){
           window.location.href = "http://localhost:8080";
        }
        else{
            next()
        }})
      
    },
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },//-------------------------------------------------------------------------------------------title quiz CRUD---------------------
  {
    path: '/admin/les-quiz',
    name: 'read-quiz',
    beforeEnter: (to, from, next) => {
      let cookie = document.cookie.slice(13);
      fetch('http://localhost:3020/api/users/test', {
        headers: {Authorization: `Bearer ${cookie}`}
    }).then(resp => resp.json()).then(data => {
        console.log(data);
        if(data.role != "admin"){
           window.location.href = "http://localhost:8080";
        }
        else{
            next()
        }})
      
    },
    
    component: () => import(/* webpackChunkName: "about" */ '../views/quiz/ReadQuizView.vue')
  },
  {
    path: '/admin/creer-un-quiz',
    name: 'create-quiz',
    beforeEnter: (to, from, next) => {
      let cookie = document.cookie.slice(13);
      fetch('http://localhost:3020/api/users/test', {
        headers: {Authorization: `Bearer ${cookie}`}
    }).then(resp => resp.json()).then(data => {
        console.log(data);
        if(data.role != "admin"){
           window.location.href = "http://localhost:8080";
        }
        else{
            next()
        }})
      
    },
    
    component: () => import(/* webpackChunkName: "about" */ '../views/quiz/CreateQuizView.vue')
  },
  {
    path: '/admin/modifier-un-quiz/:id',
    name: 'modify-quiz',
    beforeEnter: (to, from, next) => {
      let cookie = document.cookie.slice(13);
      fetch('http://localhost:3020/api/users/test', {
        headers: {Authorization: `Bearer ${cookie}`}
    }).then(resp => resp.json()).then(data => {
        console.log(data);
        if(data.role != "admin"){
           window.location.href = "http://localhost:8080";
        }
        else{
            next()
        }})
      
    },
    
    component: () => import(/* webpackChunkName: "about" */ '../views/quiz/ModifyQuizView.vue')
  },
  //-------------------------------------------------------------------------------------------question CRUD---------------------
  {
    path: '/admin/creer-question/quiz-:id/',
    name: 'create-question',
    props: true,
    beforeEnter: (to, from, next) => {
      let cookie = document.cookie.slice(13);
      fetch('http://localhost:3020/api/users/test', {
        headers: {Authorization: `Bearer ${cookie}`}
    }).then(resp => resp.json()).then(data => {
        console.log(data);
        if(data.role != "admin"){
           window.location.href = "http://localhost:8080";
        }
        else{
            next()
        }})
      
    },
    
    component: () => import(/* webpackChunkName: "about" */ '../views/question/CreateQuestionView.vue')
  },
  //----------------------------------------------------------------------------------USER QUIZ---------------------
  {
    path: '/quiz',
    name: 'quiz',   
    component: () => import(/* webpackChunkName: "about" */ '../views/quiz/UserQuizView.vue')
  },
  {
    path: '/quiz/:slug/:id',
    name: 'question',   
    component: () => import(/* webpackChunkName: "about" */ '../views/question/UserQuestionsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
