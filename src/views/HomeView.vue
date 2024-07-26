<template>
  <div class="home">
    <h1>Home</h1>
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project"></SingleProject>
    </div>
  </div>
</template>

<script>

import SingleProject from '../components/SingleProject'
export default {
  name: 'HomeView',
  components: {
    SingleProject,

  },

  data(){
    return {
      projects: []
    }
  },

  mounted(){
    fetch('http://localhost:3000/projects')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.projects = data;
    })
    .catch(() => {

    })
  }
}
</script>
