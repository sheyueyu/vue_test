<template >
    <!-- 注释 -->
    <div class="school">
        <h2>学校名称： {{name}}</h2>
        <h2>学校地址 {{address}}</h2>
        <button @click ="showName">点我提示学校名</button>
        
    </div>
</template>


<script>
    //组件交互相关的代码
    // 数据、方法、计算属性、监视等
    export default({
        name: "SchoolN", //最好和外部的文件名保持一致
        data() {
            return {
            name:"shangguigu",
            address:"bj",
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    })
</script>

<style>
    /* 组件的样式 */
    .school{
        background-color: aquamarine
    }
</style>