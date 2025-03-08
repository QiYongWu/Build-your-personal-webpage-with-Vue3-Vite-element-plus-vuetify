<script setup lang="ts" name = 'navigationBar'>
//左侧导航栏
import { useBasicInformationStore } from '@/store/basic-information';
import headerImage from './header-image.vue';
const name = useBasicInformationStore().name;
const job = useBasicInformationStore().job[0];
const school = useBasicInformationStore().school;
</script>

<template>
    <div class = 'header'>
        <headerImage />
         <h2>{{ name }}</h2>
         <P>就读于{{ school }}</P>
         <p>{{ job }}</p>
    </div>

    <div class = 'navigation'>
        <RouterLink to = '/Hello' class = 'router-link' active-class="selected">
            您好
        </RouterLink>

        <RouterLink to = '/About'  class = 'router-link' active-class="selected">
            关于
        </RouterLink>

        <RouterLink to = '/Blog'  class = 'router-link' active-class="selected">
            博客
        </RouterLink>

        <RouterLink to = '/Now'  class = 'router-link' active-class="selected">
            近况
        </RouterLink>

        <RouterLink to = '/Books'  class = 'router-link' active-class="selected">
            书籍
        </RouterLink>

        <RouterLink to = '/Writing'  class = 'router-link' active-class="selected">
             写作
        </RouterLink>

        <RouterLink to = '/Projects'  class = 'router-link' active-class="selected">
            项目
        </RouterLink>

        <RouterLink to = '/Contactme'  class = 'router-link'  active-class="selected">
            联系我
        </RouterLink>
    </div>

</template>

<style scoped>
.header{
    margin-top:30px;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
    .navigation{
        display:flex;
        flex-direction: column;
        gap:20px;
        margin-left:50px;
        margin-top:20px;
    }

    .router-link{
        font-weight: normal;
        color: inherit;
        text-decoration: none;
        font-size:25px;
    }
    .selected{
        text-decoration: underline;
    }

   

</style>
