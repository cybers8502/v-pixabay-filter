import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        info: [],
        tags: [],
        orderDESC: false,
        activeTags: []
    },
    mutations: {
        async setInfo(state, value){
            state.info = value;
        },
        async setTags(state, value){
            state.tags = value;
        },
        setActiveTag(state, value) {
            state.activeTags = value
        },
        orderDESC(state) {
            state.orderDESC ? state.orderDESC = false : state.orderDESC = true
        }
    },
    actions: {
        async fetchInfo({commit}){
            const key = process.env.VUE_APP_PIXABAY;
            let tagsArr = new Set();

            await axios.get(`https://pixabay.com/api/?key=${key}&q=cats&image_type=all&per_page=100`)
                .then( response => response.data.hits )
                .then( data => {
                    data.forEach( item => {

                        let curTagsArr = item.tags.split(', ');

                        curTagsArr.forEach(item => {
                            tagsArr.add(item)
                        })

                        item.tags = curTagsArr;
                    } )

                    commit('setInfo', data )
                    commit('setTags', Array.from(tagsArr) )
                } )
                .catch( e => { console.log(e) } )

        },
        filter({getters}) {
            return getters.getHits;
        }
    },
    getters: {
        getHits: (state) => {

            if ( state.activeTags.length ) {
                return state.info.filter( item => !(item.tags.indexOf(state.activeTags) === -1) )
            }

            if ( state.orderDESC ) {
                return state.info.sort( (a, b) => {
                    return a.comments - b.comments
                } )
            } else {
                return state.info.sort( (a, b) => {
                    return b.comments - a.comments
                } )
            }

        },
        getTags: (state) => state.tags
    }
})
