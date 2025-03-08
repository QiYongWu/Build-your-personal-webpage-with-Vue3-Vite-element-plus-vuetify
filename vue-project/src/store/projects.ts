import {defineStore} from 'pinia'
//"../../assets/projects-images/open-amazon/image1.png" 1-4
//"../../assets/projects-images/amazon/image1.png" 1-4
//"../../assets/projects-images/YouTube/image1.png"  1-3
export const useProjectsStore = defineStore('projects',{
    state(){
        const projects = [
            {
                title:'open-amazon',
                link:'https://github.com/QiYongWu/open-Amazon',
                subscription:[
                    '这是我开始入门前端的第三个项目，是我观看了尚硅谷的Vue3 + TypeScript教学视频',
                    '使用了Vue3 + TypeScript重构了我的amazon的购物界面项目',
                    '是为了学习Vue3、TypeScript、以及巩固我的前端技术知识'
                ],
                date:'2024-6',
                image:[ 
                    new URL("@/assets/projects-images/open-amazon/image1.png", import.meta.url).href,
                    new URL("@/assets/projects-images/open-amazon/image2.png", import.meta.url).href,
                    new URL("@/assets/projects-images/open-amazon/image3.png", import.meta.url).href,
                    new URL("@/assets/projects-images/open-amazon/image4.png", import.meta.url).href,
                 ]
            },
            {
                title:'amazon clone',
                link:'https://github.com/QiYongWu/javascript-amazon-project-main',
                subscription:[
                    '这是我开始入门前端的第二个项目，是博主supersimpledev的教学视频',
                    '使用了html、css、js编写了一个类似amazon的购物界面',
                    '是为了巩固html、css基础，以及学习JavaScript'
                ],
                date:'2024-2',
                image:[ 
                    new URL("@/assets/projects-images/amazon/image1.png", import.meta.url).href,
                    new URL("@/assets/projects-images/amazon/image2.png", import.meta.url).href,
                    new URL("@/assets/projects-images/amazon/image3.png", import.meta.url).href,
                    new URL("@/assets/projects-images/amazon/image4.png", import.meta.url).href,
                 ]
            },

            {
                title:'YouTube Clone',
                link:'https://github.com/QiYongWu/Youtube_Clone',
                subscription:[
                    '这是我开始入门前端的第一个项目，是博主supersimpledev的教学视频',
                    '使用了html、css编写了一个类似YouTube的视频播放界面',
                    '是为了学习html和css'
                ],
                date:'2023-9',
                image:[ 
                    new URL("@/assets/projects-images/YouTube/image1.png", import.meta.url).href,
                    new URL("@/assets/projects-images/YouTube/image2.png", import.meta.url).href,
                    new URL("@/assets/projects-images/YouTube/image3.png", import.meta.url).href,
                 ]
            }

        ]
        return { projects};
    }
})