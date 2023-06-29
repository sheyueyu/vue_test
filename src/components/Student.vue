<template >
    <!-- 注释 -->
    <div>
        <h2>{{msg }}</h2>
        <h2>学生名称： {{name}}</h2>
        <h2>性别： {{sex}}</h2>
        <h2>年龄： {{myAge}}</h2>
        <button @click ="showName">点我提示学校名</button>
        <button @click ="addAge">点我增加年龄</button>

        <hr>
    </div>
</template>


<script>
    //组件交互相关的代码
    // 数据、方法、计算属性、监视等
    export default({
        name: "StudentN", //最好和外部的文件名保持一致
        data() {
            console.log(this)
            return {
                msg:"welcome",
                myAge:this.age  //props中的数据是放置在vc身上的

            }
        },
        methods: {
            showName(){
                alert(this.name)
            },
            addAge(){
                this.myAge +=1
            }
        },
        // 简单接收如下
        // props:['name','sex','age']  // 当外部传参时就需要设置props
        // props接收到的东西是在 Vc身上存着

        //! 接收的同时对数据进行类型限制
/*         props:{
            name:String,   
            sex:String,
            age:Number,
        } */


        // 对数据类型进行限制+默认值限制+必要性限制
        props:{
            name:{
                type:String,
                required :true
            },
            age:{
                type:Number,
                default:99
            },
            sex:{
                type:String,
                required:true
            }

        }
    })
</script>

<style>
    /* 组件的样式 */
    .school{
        background-color: aquamarine
    }
</style>