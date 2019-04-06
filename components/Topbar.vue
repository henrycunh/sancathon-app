<script>
import { mapActions, mapState } from 'vuex'
import Logo from '@/components/Logo'
import SearchBar from '@/components/SearchBar'

export default {
    methods: {
        ...mapActions('nav', ['toggleSidebar'])
    },
    components: {
        Logo,
        SearchBar
    },
    computed: {
        iconClass() {
            let classes = ['fas']
            classes.push(this.sidebarVisible ? 'fa-times' : 'fa-bars')
            return classes
        },
        ...mapState('nav', ['sidebarVisible'])
    }
}
</script>

<template>
    <div class="topbar">
        <Logo class="logo" />
        <SearchBar />
    </div>
</template>

<style lang="scss" scoped>
.topbar {
    min-height: 80px;
    background: #ffffff;
    color: $primary;
    display: flex;
    position: relative;
    z-index: 2;
    padding: 0.5em 2.5em;
    align-items: center;
    box-shadow: 0 1px 5px #00000011;
    .logo {
        color: $primary;
        font-size: 20pt;
    }
}
</style>
