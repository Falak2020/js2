<template>
  <div >
      <div  ref="form" class="text-center text-success border bg-light mt-5" >
            <form class="container mt-3  p-3"  @submit.prevent="registerUser" >
               <input type="text" v-model="firstName" class="mt-3 form-control" placeholder="Enter your firstname">
               <input type="text" v-model="lastName" class="mt-3 form-control" placeholder="Enter your lastname">
               <input type="text" v-model="email" class="mt-3 form-control" placeholder="Enter your email">
               <input type="password" v-model="passwordHash" class="mt-3 form-control" placeholder="Enter your password">
               <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase">register</button>
           </form>
       </div>
       
  </div>
</template>

<script>
export default {
data(){
    return{
     firstName:'',
     lastName:'',
      email:'',
      passwordHash:'',
      ok:false,
    
      
    }
},
methods:{
    registerUser(){
        fetch('http://localhost:9999/api/users/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body:JSON.stringify( { 
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            password:this.passwordHash})
        })
          .then(res=>res.json())
          .then(data=>{
              this.ok=data.status
          })
          if(this.ok){
              this.$refs.form.innerText='The user has been created successfully try to log in'
         }
          
    },
   
}
}
</script>

<style>

</style>