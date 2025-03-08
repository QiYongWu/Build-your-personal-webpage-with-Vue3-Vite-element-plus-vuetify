<script setup lang="ts" name = 'About'>
import {useIntroductionStore} from '@/store/introduce.ts'
const myIntroduction = useIntroductionStore().data;
</script>

<template>
    <div>
      <br/>
      <div v-for="element in myIntroduction">
        <h2>
          {{ element.title }}
          <br/>
          <br/>
        </h2>
       
        <span v-for="value in element.content">
             {{ value }}
             <br/>
             <br/>
        </span>
        
        <el-divider />
      </div>
      
    </div>
  </template>

<style scoped>
</style>