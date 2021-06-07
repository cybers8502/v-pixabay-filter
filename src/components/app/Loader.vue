<template>
    <div class="loader" :class="colors">
        <div class="loader__wrap">
            <span/><span/><span/><span/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        computed: {
            colors(){
                const colorsArr = ['loader--blue', 'loader--green', 'loader--red'];
                return colorsArr[Math.floor(Math.random() * 3)];
            }
        }
    }
</script>

<style scoped>

</style>
