<template>
    <div id="app">
        {{ value }}
        <SliderVerificationCode  v-model="value"/>
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