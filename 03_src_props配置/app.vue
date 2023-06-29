<!--  -->
<template >
    <div>
        <h1 v-text="msg" ref = "title"></h1>
        <StudentN name="李四" sex='男' :age='18'/>
        <StudentN name="张三" sex='女' :age='20'/>  
        <!-- 这就体现了 数据是动态的，组件在复用 -->
        <!--  -->
    </div>
</template>

<script>
    import StudentN from './components/Student.vue'

    export default {
        name:'App',
        components:{
            StudentN
        },
        data() {
            return {
                msg: '欢迎',
            };
        },
        methods:{
        }
    }

</script>

<style >

</style>