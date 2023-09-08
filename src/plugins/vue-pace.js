import { reactive } from "vue"
export default {
    install(app, options) {
        app.config.globalProperties.$pace = reactive({
            progress: false,
            count: 0,
            start() {
                this.count++;
                this.progress = true;
            },

            finish() {
                this.count--;
                if (this.count < 1) {
                    this.count = 0;
                    this.progress = false;
                }
            }
        })
    }
}