<script lang="ts" setup name = 'headerImage'>
  import { reactive, toRefs } from 'vue'
  
  const state = reactive({
    fits: [
      
      'cover',
     
    ] ,
    // url: 'https://images.pexels.com/photos/68594/pexels-photo-68594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: new URL("@/assets/headerImage.jpg", import.meta.url).href,
  
  })
  
  const { fits, url } = toRefs(state)
  </script>

<template>
    <div class="demo-fit">
      <div v-for="fit in fits" :key="fit" class="block">
        <el-avatar shape="square" :size="100" :fit="fit" :src="url" />
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .demo-fit {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .demo-fit .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
  }
  
  .demo-fit .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }
  </style>