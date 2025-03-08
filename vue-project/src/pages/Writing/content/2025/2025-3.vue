<template>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(year, i,content) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>
        </template>
        <div>
          {{  year.content }}
        </div>
      </v-timeline-item>
    </v-timeline>
  </template>
  <script setup name = '2025-3'>
    const years = [
    {
        color: 'orange',
        year: '本月总结',
        content:'final',
      },

      {
        color: 'amber',
        year: '第四周',
         content:'4'
      },

      {
        color: 'pink',
        year: '第三周',
         content:'3'
      },

      {
        color: 'green',
        year: '第二周',
         content:'2'
      },

      {
        color: 'cyan',
        year: '第一周',
         content:'1'
      },
      
    
      
    
    ]
  </script>