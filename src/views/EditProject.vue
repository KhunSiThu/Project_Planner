<template>
  <h1>Edit Project</h1>
  <form action="" @submit.prevent ="addProject">
    <label for="">Title</label>
    <input type="text" v-model="title">
    <label for="">Project Detail</label>
    <input type="text" v-model="detail">
    <button @click="updateProject">Update Project</button>
  </form>
</template>

<script>
export default {
    props: ["id"],
    data(){
        return{
            title: "",
            detail: ""
        }
    },
    mounted(){
        fetch("http://localhost:3000/projects/"+this.id)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.title = data.title;
            this.detail = data.detail;
        })
    },
    methods:{
        updateProject(){
            fetch("http://localhost:3000/projects/"+this.id,{
                method:"PATCH",
                headers:{
                    "Content-type" : "Application/json"
                },
                body:JSON.stringify(
                    {
                        title:this.title,
                        detail : this.detail
                    }
                )
            })
            .then((res) => {
                this.$router.push("/")
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>