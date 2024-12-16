const ROUTES = {
    HOME: '/',
    VENDORS: '/vendors',
    VENDOR_CREATE: '/vendors/create',
    VENDOR_EDIT: (id) => `/vendors/${id}/edit`,
    VENDOR_DETAIL: (id) => `/vendors/${id}`,
    STORES: '/stores',
    PRODUCTS: '/products',
    CATEGORIES: '/categories',
};

export default ROUTES;