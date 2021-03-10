<template >
  <div class="mb-5 ">
   <navbar class="position-r" />
   <div v-if="!login" class="mt-5 container">
       <button class="btn me-1" :class="loginClasses" @click="change('LogIn')">Login</button>
       <button class="btn " :class="registerClasses" @click="change('registerUser')">Register</button>
       
   </div>
  <component class="container " @userOk="userOk" @logut="changelogin" :login="login"  :is="comp" />
  
   
    <!-- <log-in  @userOk="userOk" @logut="changelogin" :login="login"/> -->
   <!-- <div class="container">
         <button class=" position-a btn btn-bg p-3 text-white mt-3" @click="loginF" ref="logbtn">Log in</button>
   </div> -->
   
   <div v-if="login" class="container">
      <h1 class="text-center text-success">Welcome {{firstname}} to your application </h1>
      <get-todo :auth="auth"/> 
   </div>  
  </div>
</template>

<script>
import GetTodo from './components/getTodo.vue'
 import LogIn from './components/logIn.vue'
import Navbar from './components/navbar.vue'
import registerUser from'./components/registerUser'


export default {
  name: 'App',
  components: {
    Navbar,
    GetTodo,
    LogIn,
    registerUser,
  },
  data(){
    return{
       comp:'LogIn',
       login:false,
       auth:'',
       firstname:'',
       log: true,
       register: false,
      
    }  
 },
 methods:{
  //  loginF(){
  //    this.login= !this.login
  //    if(this.$refs.logbtn.textContent==='Log in')
  //      this.$refs.logbtn.textContent='Log ut'
  //    else
  //    this.$refs.logbtn.textContent='Log in'
  //  },
   userOk(token){
    //  this.firstname=username
     this.auth=token.token
     this.firstname=token.username
     if(token){
       this.login=true
     }
   },
   
   changelogin(){
     this.login=false
   },
   change(val){
     this.comp=val
     switch(val){
       case 'LogIn':
         this.log=true
         this.register=false
         break
        case 'registerUser':
          this.log=false
          this.register=true
     }
   }
 },
 computed: {
    loginClasses() {
      return {
        'btn-primary': this.log,
        'btn-outline-primary': !this.log
      }
    },
    registerClasses() {
      return {
        'btn-primary': this.register,
        'btn-outline-primary': !this.register
      }
    }
  }
}
    
</script>

<style>
*{
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
}

.btn-bg{
  background-color: #256fa0;
}
</style>
