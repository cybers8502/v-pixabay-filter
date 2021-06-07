<template>

    <router-link
            :to="{ name: 'PhotoDetail', params: { id: post.id }}"
            class="hits-list__item">

        <div class="hits-list__item-head">
            <div class="hits-list__item-picture">
                <loader style="font-size:6px"/>
                <img :src="post.previewURL" :alt="post.id" />
            </div>

            <span class="hits-list__item-comments">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><path d="M29,3H3C2.448,3,2,3.448,2,4c0,0.552,0.448,1,1,1h25v16H15c-0.041,0-0.076,0.018-0.116,0.023  c-0.067,0.008-0.13,0.018-0.195,0.039c-0.068,0.022-0.127,0.053-0.187,0.089c-0.033,0.019-0.071,0.025-0.102,0.049L8,26v-4  c0,0,0,0,0,0s0,0,0,0c0-0.553-0.448-1-1-1H4V8c0-0.552-0.448-1-1-1S2,7.448,2,8V22c0,0.553,0.448,1,1,1h3v5  c0,0.379,0.214,0.725,0.553,0.895C6.694,28.965,6.848,29,7,29c0.212,0,0.423-0.067,0.6-0.2l7.733-5.8H29c0.553,0,1-0.447,1-1V4  C30,3.448,29.553,3,29,3z"/></svg>
                {{post.comments}}</span>
            <span class="hits-list__item-likes">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><g><g><path d="M16,30c-0.215,0-0.43-0.069-0.61-0.207C14.844,29.372,2,19.396,2,11c0-4.411,3.589-8,8-8s8,3.589,8,8c0,0.552-0.447,1-1,1    c-0.552,0-1-0.448-1-1c0-3.309-2.691-6-6-6s-6,2.691-6,6c0,6.467,9.477,14.653,12,16.719C18.522,25.653,28,17.46,28,11    c0-3.309-2.691-6-6-6c-0.895,0-1.756,0.192-2.559,0.57c-0.5,0.236-1.097,0.021-1.331-0.478c-0.235-0.5-0.021-1.095,0.478-1.331    C19.66,3.256,20.808,3,22,3c4.411,0,8,3.589,8,8c0,8.396-12.844,18.372-13.39,18.793C16.43,29.931,16.215,30,16,30z"/></g></g></svg>
                {{post.likes}}</span>
        </div>

        <div class="hits-list__item-tags tags">
            <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="tags__item"
            >{{tag}}</span>
        </div>
    </router-link>

</template>

<script>
    import Loader from "./app/Loader";

    export default {
        name: "PhotosCard",
        components: {Loader},
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>
