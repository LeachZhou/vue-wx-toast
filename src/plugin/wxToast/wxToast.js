import wxToastComponent from './wxToast.vue'

let wxToastPlugin = {}

// 引用方式
// Vue.use(MyPlugin, { someOption: true })

wxToastPlugin.install = function (Vue, options) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const wxToastConstructor = Vue.extend(wxToastComponent)
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑...
        }
    })

    // 3. 注入组件
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })

    // 4. 添加实例方法
    Vue.prototype.$test = function (methodOptions) {
        // 逻辑...
        console.log(`你是一个${methodOptions}`)
    }

}