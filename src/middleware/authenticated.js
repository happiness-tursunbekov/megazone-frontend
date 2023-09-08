export default function authenticated({ next, store }) {
    if (!store.getters.user.id) {
        return next({
            name: 'home'
        })
    }

    return next()
}