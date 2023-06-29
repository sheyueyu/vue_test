<template >
    <!-- 注释 -->
    <div>
        <h2>学生： {{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>


<script>
    //组件交互相关的代码
    // 数据、方法、计算属性、监视等
    export default({
        // el:'#root',
        name: 'StudentN',
        data() {
            return {
            studentName:'zhangsan',
            age:18
            }
        },
    })
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: aquamarine
    }
</style>