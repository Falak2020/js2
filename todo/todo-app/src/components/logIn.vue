<template>
<div>
    <div v-if="login">
        <button ref="logutbtn" class='position-a btn btn-bg text-white' @click='logut'>Log ut</button>
    </div>
    <div v-else class="border bg-light">
       <form class="container mt-3  p-3 " ref="form" @submit.prevent="basiclogin" >
            <input type="text"  v-model="email" class="mt-3 form-control" placeholder="Enter your email">
            <input type="password"  v-model="password" class="mt-3 form-control" placeholder="Enter your password">
            <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase mb-3">Log in</button>    
            <small class="text-danger">{{error}}</small>
       </form>
        <div  class="container text-center mt-5"> 
             <h1>Please click log in to enter your todo application</h1>
        </div>
    </div>
   
</div>
  
</template>

<script>
export default {
    props:['login'],
data(){
    return{
        email:'',
        password:'',
        token:'',
        username:'',
        error:''
    }
},
methods:{
     basiclogin () {
      fetch('http://localhost:9999/api/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body:JSON.stringify( { 
            email:this.email,
            password:this.password})
        })
          .then(res=>res.json())
          .then(data=> {
              this.token=data.token
              this.username=data.username
              
              if(this.token){
                  this.$emit('userOk',{token:this.token,username:this.username})    
              }
              else{
                  this.error=data.message
              }
              })
    
},
logut(){
    this.$emit('logut')
    this.$refs.logutbtn.textContent='log in'
    
}
}
}
</script>

<style>
.position-a{
  position: absolute;
  top: 0;
  right: 5px;
}
.position-r{
  position: relative;
}
</style>