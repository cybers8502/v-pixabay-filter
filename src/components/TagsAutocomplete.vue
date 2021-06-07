<template>

    <div class="tags-filter">
        <input @keyup="onEnter($event)" v-model="activeTag"/>

        <ul class="tags-filter__popup" :class="{'is-open' : isShowPopup }">
           <li
                   v-for="tag in filteredTags"
                   :key="tag"
                   @click="checkActiveTag(tag)"
           >
               {{tag}}
           </li>
            <div class="tags-filter__popup-message" v-if="!filteredTags.length">Nothing matches</div>
        </ul>

    </div>

</template>

<script>
    export default {
        name: "TagsAutocomplete",
        data() {
            return {
                timer: null,
                filteredTags: [],
                activeTag: '',
                isShowPopup: false,
            }
        },
        methods: {
            onEnter(val) {
                this.isShowPopup = false;

                clearTimeout(this.timer);

                let value = val.target.value;

                if ( value === '' ) {
                    this.filteredTags = [];
                    this.$store.commit('setActiveTag', '');
                    this.popup = null;
                    return
                }

                this.timer = setTimeout( () => {

                    this.filteredTags = this.$store.getters.getTags.filter( item => {
                        if ( item.match(value) ) {
                            return item;
                        }
                    })

                    this.isShowPopup = true;
                }, 1000 )

            },
            checkActiveTag(val) {
                this.activeTag = val;
                this.filteredTags = [];
                this.$store.commit('setActiveTag', val);
            }
        }
    }
</script>
