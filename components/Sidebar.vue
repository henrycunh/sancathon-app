<template>
    <div class="sidebar">
        <div class="item">
            <div class="icon">
                <i class="fas fa-search" />
            </div>
            <div class="label">
                Busca Avançada
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <i class="fas fa-file-export" />
            </div>
            <div class="label">
                Exportar Dados
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <i class="fas fa-box" />
            </div>
            <div class="label">
                Ver Gavetas
            </div>
        </div>
        <div class="item">
            <div class="icon">
                <i class="fas fa-cog" />
            </div>
            <div class="label">
                Configurações
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo'
import SearchBar from '~/components/SearchBar'

export default {
    components: {
        Logo,
        SearchBar
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background: $secondary;
    min-height: calc(100vh - 80px);
    width: 300px;
    z-index: 1;
    .item {
        display: flex;
        background: $secondary;
        color: #fff;
        padding: 1.5em 2em;
        align-items: center;
        cursor: pointer;
        transition: 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
        .icon {
            color: lighten($primary, 40%);
            font-size: 13pt;
            position: relative;
            transition: 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
            top: 2px;
        }
        .label {
            margin-left: 20px;
            font-size: 12pt;
            font-weight: 600;
        }
        &:hover {
            background: $active;
            .icon {
                color: #ffffff;
            }
        }
    }
}
</style>
