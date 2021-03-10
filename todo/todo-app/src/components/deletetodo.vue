<template>
  <div>
    <button @click="deleteOne" class="btn btn-danger px-3 " >delete</button> 
    <div ref="result" class="position"></div>
  </div>
 
</template>

<script>
const popUp = (result) => {
    let popText = document.createElement('div')
    popText.classList.add('card', 'text', 'text-danger', 'bg-warning')
    let buttonOk = document.createElement('button');
    buttonOk.classList.add('btn', 'btn-success', 'py-2', 'text-center');
    buttonOk.textContent = 'OK'
    popText.innerText = 'Not completed you can not delete this task'
    popText.appendChild(buttonOk)
    result.appendChild(popText)
    buttonOk.addEventListener('click', () => {
        popText.classList.add('d-none')
    })
}
export default {
 props:['todo','auth'],
 methods:{
   deleteOne(){
     
     if(this.todo.completed){
       this.$refs.result.innerText=''
       fetch(`http://localhost:9999/api/todos/${this.todo._id}`,{
       method:'DELETE',
       headers:{'Authorization': `Bearer ${this.auth}`}
     })
    //  .then(()=>this.$emit('deletetodo'))
     }
     else{
     
      popUp(this.$refs.result)
     }
   }
 }
}
</script>

<style>
.text{
   position: absolute;
   z-index:1;
   width:150px;
   height: 150px;
   bottom:50px;
   right:-50px;
   display: inline;
   padding: 1rem;
   text-align: center;
}
.position{
  position: relative;
}

</style>