export default {
    install(app, options) {
        function middlewarePipeline (context, middleware, index) {
            const nextMiddleware = middleware[index]
            if(!nextMiddleware){
                return context.next
            }
            return () => {
                const nextPipeline = middlewarePipeline(
                    context, middleware, index + 1
                )
                nextMiddleware({ ...context, next: nextPipeline })
            }
        }

        app.config.globalProperties.$router.beforeEach((to, from, next) => {
            if (!to.meta || !to.meta.middleware) {
                return next()
            }
            const middleware = to.meta.middleware
            const context = {
                to,
                from,
                next,
                store: app.config.globalProperties.$store
            }
            return middleware[0]({
                ...context,
                next: middlewarePipeline(context, middleware, 1)
            })
        })
    }
}