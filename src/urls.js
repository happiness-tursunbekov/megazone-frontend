export default {
    storeShow: 'api/stores/:slug',
    stores: 'api/stores',
    categoriesTree: 'api/categories/tree',
    authUser: 'api/auth/user',
    storeCategory: 'api/stores/:storeId/categories/:categoryId',
    storeProducts: 'api/stores/:storeId/products',
    storeProduct: 'api/stores/:storeId/products/:productId',
    storeProductReviews: 'api/stores/:storeId/products/:productId/reviews',
    storeProductReview: 'api/stores/:storeId/products/:productId/reviews/:reviewId',
    storeProductReviewReaction: 'api/stores/:storeId/products/:productId/reviews/:reviewId/reaction',
    storeSettingsCategories: 'api/stores/:storeId/settings/categories',
    storeSettingsCategoriesSort: 'api/stores/:storeId/settings/categories/sort',
    storeSettingsCategory: 'api/stores/:storeId/settings/categories/:categoryId',
    storeSettingsCategoriesEdit: 'api/stores/:storeId/settings/categories/:categoryId/edit',
    storeSettingsCategoriesFields: 'api/stores/:storeId/settings/categories/:categoryId/fields',
    fields: 'api/fields',
    storeCreate: 'api/stores/create'
}