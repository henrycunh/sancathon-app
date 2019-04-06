<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['floors'])
    }
}
</script>

<template>
    <section id="floor-nav">
        <h1>
            Andares
        </h1>
        <div class="container">
            <div class="guides">
                <div
                    class="floor"
                    v-for="(floor, index) in floors"
                    :key='floor.id'
                >
                    <div class="number">
                        {{ index + 1 }}
                    </div>
                    <div class="label">
                        {{ floor.label }}
                    </div>
                </div>
            </div>
            <div class="view">
                fdasjklfdsafjk
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 24pt;
    padding: 1em;
    font-weight: 500;
    border-bottom: 1px solid #e3e3e3;
}
.container {
    background: #f6f6f6;
    display: grid;
    grid-template-columns: 1fr 4fr;

    .guides {
        background: #e3e3e3;
        .floor {
            padding: 1em 2em;
            display: flex;
            align-items: center;
            cursor: pointer;
            .number {
                display: inline-block;
                font-size: 14pt;
                padding: 0.08em 0.45em;
                font-weight: 700;
                color: #ffffff;
                background: $primary;
            }
            .label {
                display: inline-block;
                color: $primary;
                font-size: 13pt;
                font-weight: 600;
                margin-left: 10px;
            }
            &:hover {
                .number,
                .label {
                    color: $active;
                }
                .number {
                    border-color: $active;
                }
            }
        }
    }
}
</style>
