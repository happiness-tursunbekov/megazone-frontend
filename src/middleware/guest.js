export default function guest({ next, store }) {
    if (store.getters.user.id) {
        return next({
            name: 'index'
        })
    }

    return next()
}