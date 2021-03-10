<template>
  <div>
    <div v-if="todo.completed">
      <button ref="editbtn" class="btn btn-info text-white" @click="editone">undo</button>
    </div>
    <div v-else>
      <button ref="editbtn" class="btn btn-info text-white" @click="editone"> edit</button>
    </div>
  </div>
</template>

<script>
export default {
props:['todo','auth'],

methods:{
    editone(){
     
        fetch(`http://localhost:9999/api/todos/${this.todo._id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
           'Authorization': `Bearer ${this.auth}`
        },
        body: JSON.stringify({
         completed: !this.todo.completed
    })
  })
  .then(res=>res.json())
  // .then(()=>this.$emit('changetodo'))

  
  
}
}
}

</script>

<style>

</style>