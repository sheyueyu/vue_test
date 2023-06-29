<!--  -->
<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <SchoolN></SchoolN>
        <StudentN></StudentN>
    </div>
</template>

<script>
    import SchoolN from './components/School.vue'
    import StudentN from './components/Student.vue'
    export default {
        name:'App',
        components:{
            SchoolN,
            StudentN,
        }
    }
</script>