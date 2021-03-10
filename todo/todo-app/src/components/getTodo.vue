<template>
  <div class="container">
    <addnewtodo :auth="auth"/>
    
    <div v-for="todo in todos" :key="todo._id" class="border p-3 mt-3 d-md-flex justify-content-between align-items-center">
       <div :class="{done:todo.completed}">
          <h1>{{todo.title}}</h1>
        </div>
        <div class="d-flex justify-content-between align-items-center w-30">
            <deletetodo  :todo="todo"  :auth="auth"/>
            <edittodo :todo="todo"  :auth="auth" />
         </div>
   </div>  
</div>  
</template>

<script>
import addnewtodo from'./addnewtodo.vue'
import deletetodo from './deletetodo.vue'
import Edittodo from './edittodo.vue'
// import {ref,computed} from 'vue'
export default {
  props:['auth'],
  components:{
     deletetodo,
     Edittodo,
     addnewtodo,
    },

    // setup(){
    // const  todos=ref([])

    // const fetchTodo=computed(()=>{
        
    //     fetch('http://localhost:9999/api/todos')
    //    .then(res=>res.json())
    //     .then(data=>{
    //       todos.value=data
    //       console.log(todos)
    //       })
    //   })
    //   return{fetchTodo,todos}
    // }
  data(){
      return{
          todos:[],
          todo:null
      }
  },
  created(){
    this.fetchTodo()
  },
  updated(){
   this.fetchTodo()
  },
  methods:{
    fetchTodo(){
      fetch('http://localhost:9999/api/todos')
       .then(res=>res.json())
       .then(data=>this.todos=data)
      },
    // changeUser() {
    //   this.fetchTodo()
    // },
    //  changetodo(){
    //   this.fetchTodo()
    // },
    // deletetodo(){
    //   this.fetchTodo()
    // }
  }
 
}
</script>

<style>
.done{
  color: grey;
  text-decoration: line-through;
}
.w-30{
  min-width:25%;
}
</style>