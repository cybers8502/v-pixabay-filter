<template>

    <div class="filter">
        <strong>Filter:</strong>

        By comments number
        <button @click.prevent="commentsSort">
            <span v-if="labeling">rising</span>
            <span v-else>descending</span>
        </button>

        , by tags
        <TagsAutocomplete/>
    </div>

</template>

<script>
    import TagsAutocomplete from "./TagsAutocomplete";
    export default {
        name: "PhotosFilter",
        components: {TagsAutocomplete},
        methods: {
            commentsSort() {
                this.$store.commit('orderDESC');
            }
        },
        computed: {
            labeling() {
                return this.$store.state.orderDESC
            }
        }
    }
</script>
