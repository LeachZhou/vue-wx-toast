<template>
    <div id="wxToast">
        <div class="toast" :class="{active: toastHidden}">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "wxToast",
        data() {
            return {
                text: '',
                toastHidden: true
            }
        },
        method: {
            wxToastFun(msg, time) {
                this.text = msg || '已完成'
                time = time || 1000
                this.toastHidden = true
                setTimeout(() => {
                    this.toastHidden = false
                }, time)
            }
        }
    }
</script>

<style lang="less" scoped>
    .toast {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        min-height: 2em;
        padding-left: 1em;
        background: #000000;
        color: #ffffff;
    }
</style>