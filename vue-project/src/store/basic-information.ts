import { defineStore } from "pinia";

export const useBasicInformationStore = defineStore('basic-informaition',
    {
        actions:{

        },
        
        state(){
            const basicInforMation={
                name:'吴永琦',
                "both year":"2004-02-04",
                birthday:'2月4日',
                "foods" : ["牛肉","鸡蛋","矿泉水","米饭","猪肉"],
                "Tech stack" : ['Vue3','SpringBoot','Vuetify3','vant','TypeScript','python','C++'],
                funny:["篮球",'足球','排球','网球','羽毛球','健身'],
                star:['邓紫棋','尤雨溪','KobeBrant'],
                job:['Web前端工程师'],
                school:"桂林电子科技大学"
            }
            return basicInforMation;
            }
        }
    
)