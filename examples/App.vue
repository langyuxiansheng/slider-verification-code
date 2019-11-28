<template>
    <div id="app">
        {{ value }}
        <SliderVerificationCode v-model="value" sliderWidth="50px" height="46px" />
        <!-- <SliderVerificationCode height="60px" sliderWidth="120px"  inactiveValue="未解锁" activeValue="已解锁" v-model="value"/> -->
        <button class="reset" @click="reset()">重置</button>
        <p>重置样式 只需要将原来的值初始化即可</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value: false
        }
    },
    methods:{
        reset(){
            this.value = false;
        }
    }
}
</script>
<style scoped>
.reset{
    margin-top: 20px;
    padding: 10px 15px;
}
</style>
