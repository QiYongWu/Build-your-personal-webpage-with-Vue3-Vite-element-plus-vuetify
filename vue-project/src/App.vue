<script setup lang = 'ts' name = 'App'>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'; // Vue 3
const route = useRoute();

import navigationBar from './components/navigation-bar.vue'
const order = ref(0);

// 响应式获取当前路径
const text = computed(() => {

      let path = route.path; // 自动追踪路由变化
      
      

      return path.split('/').pop(); // 如 "About"
    
    });

</script>

<template>
    
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer color="grey-darken-2" permanent>
        <navigationBar />
      </v-navigation-drawer>
  
      <v-app-bar
        :order="order"
        color="grey-lighten-2"
        :title="text"
        flat
      >
        <template v-slot:append>
          <v-switch
            v-model="order"
            false-value="0"
            label=""
            true-value="-1"
            hide-details
            inset
          ></v-switch>
        </template>
      </v-app-bar>
  
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <!-- Main Content -->
       <RouterView>

       </RouterView>

      </v-main>
    </v-layout>
  </template>

