<template>
    <div class="project">
        <div class="flexing">
            <div><h3 @click="showDetail = !showDetail">{{project.title}}</h3></div>
            <div class="icon-con">
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-regular fa-square-check"></i>
            </div>
        </div>
        
        <p v-if="showDetail">{{project.detail}}</p>
       
    </div>
</template>

<script>
export default {
    props: ['project'],

    data(){
        return{
            showDetail : false
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


</style>