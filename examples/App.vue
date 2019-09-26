<template>
    <div id="app">
        {{ value }}
        <SliderVerificationCode v-model="value"/>
        <!-- <SliderVerificationCode height="60px" sliderWidth="120px"  inactiveValue="未解锁" activeValue="已解锁" v-model="value"/> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            value: false
        }
    }
}
</script>