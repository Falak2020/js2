<template>
<div  class="d-flex justify-content-center mt-4">
    <form @submit.prevent="addnewtodo">
        <div class="input-group">
            <input type="text" placeholder="enter your todo" class="p-2 border-none" v-model="name">
            <button class="btn btn-bg p-2 text-white">add</button>
        </div>
      
    </form>    
</div>
  
</template>

<script>


export default {
 props:['auth'],
 component:{
  
 },
data(){
    return{
        name:'',
        status:false
    }
}

,
methods:{
    addnewtodo(){
        
      let title=this.name
      console.log(title)
        console.log(this.auth)
         fetch('http://localhost:9999/api/todos/new',{
             method:'POST',
             headers: {
            'Content-type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${this.auth}`
            },
            body:JSON.stringify({
                title,
                })
          })
          .then(res=>res.json())
        //   .then((data)=>this.$emit('changeUser', data))
          
          this.name=''
    }
}
}
</script>

<style>

</style>