<template>

    <Loader v-if="isLoading"/>

    <div class="hits-list" v-else>

        <PhotosFilter/>

        <div class="hits-list__list">
            <PhotosCard v-for="item in getItems" :key="item.id" :post="item"/>
        </div>
    </div>

</template>

<script>
    import Loader from "../components/app/Loader";
    import PhotosCard from "../components/PhotosCard";
    import PhotosFilter from "../components/PhotosFilter";

    export default {
        name: 'HitsList',
        components: {PhotosFilter, Loader, PhotosCard},
        data() {
            return {
                isLoading: true
            }
        },
        async mounted() {
            if( !this.$store.state.info.length ){
                await this.$store.dispatch('fetchInfo');
            }
            this.isLoading = false;
        },
        computed: {
            getItems() {
                return this.$store.getters.getHits
            }
        }
    }
</script>
