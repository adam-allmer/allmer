<template>
    <div>
        <h2>Recent Posts</h2>
        <ul>
            <li v-for="post in recentPosts" :key="post.id">
                <router-link :to="post.link">{{ post.title }}</router-link>
                <p>{{ post.date }}</p>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            posts: [], // Assume this gets populated with your posts
        };
    },
    computed: {
        recentPosts() {
            return this.posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
        },
    },
    mounted() {
        // Fetch your posts metadata here and assign it to this.posts
        // For example, from a local JSON file or an API
    },
};
</script>
  