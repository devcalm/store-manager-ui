import React from "react";
import ROUTES from './routes';
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage.jsx";
import RootLayout from "../../pages/Root/RootLayout.jsx";
import { VendorCreatePage, VendorUpdatePage, VendorViewPage } from "../../pages/CRUD/Vendor/index.js";
import { vendorLoader, vendorsLoader } from "./loaders.js";
import {Fallback} from "./fallback.jsx";

const Vendors = React.lazy(() => import("../../pages/CRUD/Vendor/VendorListPage.jsx") ) 


const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: ROUTES.VENDORS,
                element: <Vendors />,
                loader: vendorsLoader,
                HydrateFallback: Fallback
            },
            {
                path: ROUTES.VENDOR_CREATE,
                element: <VendorCreatePage />
            },
            {
                path: ROUTES.VENDOR_EDIT(':id'),
                element: <VendorUpdatePage />,
                loader: vendorLoader,
                HydrateFallback: Fallback,
            },
            {
                path: ROUTES.VENDOR_DETAIL(':id'),
                element: <VendorViewPage />,
                loader: vendorLoader,
                HydrateFallback: Fallback
            },
            {
                path: ROUTES.CATEGORIES,
                element: <p>Categories</p>
            },
            {
                path: ROUTES.STORES,
                element: <p>Stores</p>
            },
            {
                path: ROUTES.PRODUCTS,
                element: <p>Products</p>
            }
        ]
    }
]);

export default router; 