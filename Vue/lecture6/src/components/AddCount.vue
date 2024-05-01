<template>
  <div>
    <button @click="upCounter">Counter is {{ counter }}</button>
  </div>
</template>

<script>
export default {
    name: 'AddCount',

    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        upCounter() {
            this.counter++
        },
    },
    beforeCreate(){
        this.counter = 1;
    },
    created(){
        this.counter = 2;
    },
    beforeMount(){
        console.log('before mount');
    },
    mounted(){
        console.log('mounted');
    },
    updated(){
        console.log('updated');
    }
};
</script>
  

<style>

</style>
  