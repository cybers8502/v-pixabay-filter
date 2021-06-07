<template>
    <div class="photo-details">
        <div
                v-if="record"
                class="photo-details__wrap"
        >
            <h2 class="photo-details__title">Details ID: {{record}}</h2>
            <p>Type: {{post.type}}</p>

            <div class="photo-details__picture">
                <img :src="post.largeImageURL" :alt="record" />
            </div>

            <p>Files size: <strong>{{post.imageSize}}</strong> byte</p>

            <div class="photo-details__tags tags">
            <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="tags__item"
            >{{tag}}</span>
            </div>

            <p><a :href="post.pageURL">Link to resource</a></p>

            <table class="photo-details__population">
                <tr>
                    <td>
                        <p class="photo-details__label">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><g><g><path d="M16,25c-4.265,0-8.301-1.807-11.367-5.088c-0.377-0.403-0.355-1.036,0.048-1.413c0.404-0.377,1.036-0.355,1.414,0.048    C8.778,21.419,12.295,23,16,23c4.763,0,9.149-2.605,11.84-7c-2.69-4.395-7.077-7-11.84-7c-4.938,0-9.472,2.801-12.13,7.493    c-0.272,0.481-0.884,0.651-1.363,0.377c-0.481-0.272-0.649-0.882-0.377-1.363C5.147,10.18,10.333,7,16,7    c5.668,0,10.853,3.18,13.87,8.507c0.173,0.306,0.173,0.68,0,0.985C26.853,21.819,21.668,25,16,25z"/></g><g><path d="M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,21,16,21z M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3    s3-1.346,3-3S17.654,13,16,13z"/></g></g></svg>
                            View:
                        </p>
                    </td>
                    <td><strong>{{post.views}}</strong></td>
                </tr>
                <tr>
                    <td>
                        <p class="photo-details__label">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><g><path d="M15.293,25.707C15.484,25.898,15.74,26,16,26c0.129,0,0.259-0.024,0.383-0.076C16.756,25.77,17,25.404,17,25V3   c0-0.552-0.448-1-1-1s-1,0.448-1,1v19.586l-7.293-7.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L15.293,25.707z"/><path d="M20,22c0.256,0,0.512-0.098,0.707-0.293l5-5c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.39-1.023-0.391-1.414,0.001l-5,5   c-0.391,0.391-0.391,1.023,0,1.414C19.488,21.902,19.744,22,20,22z"/><path d="M29,21c-0.553,0-1,0.447-1,1v6H4v-6c0-0.553-0.448-1-1-1s-1,0.447-1,1v7c0,0.553,0.448,1,1,1h26c0.553,0,1-0.447,1-1v-7   C30,21.447,29.553,21,29,21z"/></g></svg>
                            Downloads:
                        </p>
                    </td>
                    <td><strong>{{post.downloads}}</strong></td>
                </tr>
                <tr>
                    <td>
                        <p class="photo-details__label">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><g><g><path d="M16,30c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S20.411,30,16,30z M16,16c-3.309,0-6,2.691-6,6s2.691,6,6,6    s6-2.691,6-6S19.309,16,16,16z"/></g><g><path d="M18,16h-4c-0.315,0-0.611-0.148-0.8-0.4l-3-4C10.07,11.427,10,11.216,10,11V7c0-0.552,0.448-1,1-1s1,0.448,1,1v3.667    L14.5,14h3l2.5-3.333V4h-9c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.553,0,1,0.448,1,1v8c0,0.216-0.07,0.427-0.2,0.6l-3,4    C18.611,15.852,18.314,16,18,16z"/></g></g></svg>
                            Favorites:
                        </p>
                    </td>
                    <td><strong>{{post.favorites}}</strong></td>
                </tr>
                <tr>
                    <td>
                        <p class="photo-details__label">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><g><g><path d="M16,30c-0.215,0-0.43-0.069-0.61-0.207C14.844,29.372,2,19.396,2,11c0-4.411,3.589-8,8-8s8,3.589,8,8c0,0.552-0.447,1-1,1    c-0.552,0-1-0.448-1-1c0-3.309-2.691-6-6-6s-6,2.691-6,6c0,6.467,9.477,14.653,12,16.719C18.522,25.653,28,17.46,28,11    c0-3.309-2.691-6-6-6c-0.895,0-1.756,0.192-2.559,0.57c-0.5,0.236-1.097,0.021-1.331-0.478c-0.235-0.5-0.021-1.095,0.478-1.331    C19.66,3.256,20.808,3,22,3c4.411,0,8,3.589,8,8c0,8.396-12.844,18.372-13.39,18.793C16.43,29.931,16.215,30,16,30z"/></g></g></svg>
                            Likes:
                        </p>
                    </td>
                    <td><strong>{{post.likes}}</strong></td>
                </tr>
                <tr>
                    <td>
                        <p class="photo-details__label">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><path d="M29,3H3C2.448,3,2,3.448,2,4c0,0.552,0.448,1,1,1h25v16H15c-0.041,0-0.076,0.018-0.116,0.023  c-0.067,0.008-0.13,0.018-0.195,0.039c-0.068,0.022-0.127,0.053-0.187,0.089c-0.033,0.019-0.071,0.025-0.102,0.049L8,26v-4  c0,0,0,0,0,0s0,0,0,0c0-0.553-0.448-1-1-1H4V8c0-0.552-0.448-1-1-1S2,7.448,2,8V22c0,0.553,0.448,1,1,1h3v5  c0,0.379,0.214,0.725,0.553,0.895C6.694,28.965,6.848,29,7,29c0.212,0,0.423-0.067,0.6-0.2l7.733-5.8H29c0.553,0,1-0.447,1-1V4  C30,3.448,29.553,3,29,3z"/></svg>
                            Comments:
                        </p>
                    </td>
                    <td><strong>{{post.comments}}</strong></td>
                </tr>
            </table>

            <div class="photo-details__author">
                <div class="photo-details__author-photo">
                    <img :src="post.userImageURL" :alt="post.user_id" />
                </div>
                <p>Author: <strong>{{post.user}}</strong></p>
            </div>


        </div>

        <div
                v-else
                class="photo-details__empty"
        >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" viewBox="0 0 32 32" xml:space="preserve"><g id="Emoji_x2C__sad_x2C__cry_x2C__sadness"><path d="M16,30C8.28,30,2,23.72,2,16S8.28,2,16,2s14,6.28,14,14S23.72,30,16,30z M16,3C8.832,3,3,8.832,3,16   s5.832,13,13,13s13-5.832,13-13S23.168,3,16,3z" fill="#263238"/><path d="M19.5,24c-0.172,0-0.339-0.089-0.433-0.248C19.027,23.684,17.977,22,15,22s-4.027,1.684-4.07,1.755   c-0.143,0.235-0.449,0.313-0.684,0.174c-0.236-0.141-0.316-0.443-0.178-0.681C10.122,23.156,11.42,21,15,21   s4.878,2.156,4.932,2.248c0.139,0.238,0.058,0.545-0.18,0.684C19.673,23.979,19.586,24,19.5,24z" fill="#263238"/><path d="M21.5,16c-3.947,0-5.363-2.14-5.421-2.23c-0.149-0.232-0.082-0.542,0.151-0.69   c0.232-0.15,0.541-0.082,0.69,0.151C16.967,13.3,18.134,15,21.5,15c0.276,0,0.5,0.224,0.5,0.5S21.776,16,21.5,16z" fill="#263238"/><path d="M6.5,16C6.224,16,6,15.776,6,15.5S6.224,15,6.5,15c3.366,0,4.533-1.7,4.581-1.773   c0.152-0.228,0.46-0.293,0.691-0.144c0.23,0.149,0.297,0.455,0.149,0.687C11.863,13.86,10.447,16,6.5,16z" fill="#263238"/><g><path d="M23,22c-1.103,0-2-0.897-2-2c0-1.319,1.42-3.526,1.582-3.773c0.091-0.14,0.246-0.225,0.412-0.227    c0.167-0.021,0.323,0.078,0.417,0.216C23.574,16.45,25,18.553,25,20C25,21.103,24.103,22,23,22z M23.009,17.448    C22.558,18.235,22,19.36,22,20c0,0.552,0.449,1,1,1s1-0.448,1-1C24,19.296,23.455,18.205,23.009,17.448z" fill="#263238"/></g></g></svg>
            <p>Nothing found</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'PhotoDetail',
        data() {
            return {
                record: null
            }
        },
        mounted() {
            this.record = this.$route.params.id;
        },
        computed: {
            post() {
                return this.$store.getters.getHits.find( item => item.id === this.$route.params.id )
            }
        }
    }
</script>
