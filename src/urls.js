export default {
    storeShow: 'api/stores/:slug',
    stores: 'api/stores',
    categoriesTree: 'api/categories/tree',
    category: 'api/categories/:id',
    products: 'api/products',
    authUser: 'api/auth/user',
    storeCategory: 'api/stores/:storeId/categories/:categoryId',
    storeCategoryBrandModels: 'api/stores/:storeId/categories/:categoryId/brand-models',
    storeProducts: 'api/stores/:storeId/products',
    storeProductCreate: 'api/stores/:storeId/products/create',
    storeProduct: 'api/stores/:storeId/products/:productId',
    storeProductRelated: 'api/stores/:storeId/products/:productId/related',
    storeProductReviews: 'api/stores/:storeId/products/:productId/reviews',
    storeProductReview: 'api/stores/:storeId/products/:productId/reviews/:reviewId',
    storeProductReviewReaction: 'api/stores/:storeId/products/:productId/reviews/:reviewId/reaction',
    storeSettingsCategories: 'api/stores/:storeId/settings/categories',
    storeSettingsCategoriesSort: 'api/stores/:storeId/settings/categories/sort',
    storeSettingsCategory: 'api/stores/:storeId/settings/categories/:categoryId',
    storeSettingsCategoriesEdit: 'api/stores/:storeId/settings/categories/:categoryId/edit',
    storeSettingsCategoriesFields: 'api/stores/:storeId/settings/categories/:categoryId/fields',
    storeSettingsCategoriesGroups: 'api/stores/:storeId/settings/categories/:categoryId/groups',
    fields: 'api/fields',
    storeCreate: 'api/stores/create',
    storeEdit: 'api/stores/:storeId/edit',
    storeSocialMedia: 'api/stores/:storeId/social-media',
    home: 'api/home',
    search: 'api/search',
    authGoogle: 'api/auth/google',
    authLogin: 'api/auth/login',
    authRegister: 'api/auth/register'
}