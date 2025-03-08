
<script lang="ts" setup name = 'Contactme'>
import { ref } from 'vue'

const value2 = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

<template>
    <div>
        <p>我的电话: 18178865609</p>
        <p>我的邮箱: qiyongw@126.com</p>
        <p>我的QQ: 3221700467</p>
    </div>
    <div class="demo-rate-block">
      <span class="demonstration">😊如果可以，请为我打个分吧</span>
      <el-rate v-model="value2" :colors="colors" />
    </div>
  </template>
  
  <style scoped>
  div{
    font-size:30px;
  }
  .demo-rate-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
  }
  .demo-rate-block:last-child {
    border-right: none;
  }
  .demo-rate-block .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 25px;
    margin-bottom: 20px;
  }
  </style>
  