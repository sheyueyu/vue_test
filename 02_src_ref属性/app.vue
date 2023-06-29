<!--  -->
<template >
    <div>
        <h1 v-text="msg" ref = "title"></h1>
        <button @click="showDom">点我输出上方的Dom</button>
        <school ref = "sch"/>
    </div>
</template>

<script>
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{
            School
        },
        data() {
            return {
                msg: '欢迎',
            };
        },
        methods:{
            showDom(){
                // 如果要操作dom，应该怎么处理？不用id ,而是用ref
                // ref 相当于 id的替换工具
                //获取到真实dom元素
                // console.log(this.$refs.title)
                console.log(this.$refs.sch)  //school组件的实例对象
            }
        }
    }

</script>

<style >

</style>