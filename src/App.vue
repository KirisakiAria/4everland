<template>
    <main class="main" id="app">
        <router-view />
    </main>
</template>
<script>
    export default {
        name: 'app',
        created() {
            let ip
            if (window['AndroidBridge']) {
                ip = window['AndroidBridge'].getServerIP()
            } else {
                ip = process.env.VUE_APP_BASE_API
            }
            this.$axios.defaults.baseURL = `http://${ip}/guiding/api/`
        },
    }
</script>
