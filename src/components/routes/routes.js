const ROUTES = {
    ROOT: '/',
    HOME: '/',
    VENDORS: '/vendors',
    VENDOR_CREATE: '/vendors/create',
    VENDOR_EDIT: (id) => `/vendors/${id}/edit`,
    VENDOR_DETAIL: (id) => `/vendors/${id}`,
};

export default ROUTES;