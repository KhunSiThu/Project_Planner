<template>
    <div class="project" :class="{complete:project.complete}">
        <div class="flexing">
            <div><h3 @click="showDetail = !showDetail">{{project.title}}</h3></div>
            <div class="icon-con">
                <i class="fa-solid fa-trash" @click="deleteProject"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-regular fa-square-check"  @click="completeProject"></i>
            </div>
        </div>
        
        <p v-if="showDetail">{{project.detail}}</p>
        {{ project.complete }}
    </div>
</template>

<script>
export default {
    props: ['project'],

    data(){
        return{
            showDetail : false,
            api : 'http://localhost:3000/projects/'
        }
    },

    methods:{
       deleteProject(){
        let deleteRoute = this.api+this.project.id;
        fetch(deleteRoute,{method:"DELETE"})
        .then(() => {
            this.$emit("delete",this.project.id)
        })
        .catch((err) => {
            console.log(err);
        })
       },

       completeProject(){
        let updateCompleteRoute = this.api+this.project.id;
        fetch(updateCompleteRoute,{
            method:"PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(
               {
                complete: !this.project.complete
               }
            )
        })
        .then(() =>{
            this.$emit("complete",this.project.id);
        })
        .catch((err) => {
            console.log(err);
        })
       }
    }
}
</script>

<style>
    .project {
        padding: 20px;
        background-color: #f2f2f2;
        margin: 10px;
        border-left: 5px solid red;
        border-radius: 5px;
    }

    h3 {
        color: indigo;
        cursor: pointer;
    }

    .flexing {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .flexing i {
            margin-left: 15px;
            color: #7777;
        }
    
    .flexing i:hover {
        transition: .5s;
        color: black;
        cursor: pointer;
    }

    .complete{
        border-left-color: green;
    }
</style>