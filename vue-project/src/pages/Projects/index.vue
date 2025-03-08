<script setup lang="ts">

import { useProjectsStore } from '@/store/projects';
const projects = useProjectsStore().projects;
// let str = new URL("../../assets/projects-images/open-amazon/image1.png", import.meta.url).href;
</script>

<template>
    <div>

      <div v-for="project in projects">
        <h1>{{ project.title }} <v-tab></v-tab> <v-tab></v-tab>  <v-tab></v-tab>   {{ project.date }}</h1>
        <br />
        <span v-for="content in project.subscription">
          {{ content }}
          <br />
          <br />
        </span>
        <a :href = "project.link">项目的代码仓库地址</a>
        <br />
        <br />
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in project.image">
              <img 
              :src="item"
              style="width: 100%; height: 100%; object-fit: contain; display: block; margin: 0 auto;"
            >
            </el-carousel-item>
          </el-carousel>


        <el-divider />
      </div>

    </div>
  </template>
  

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>