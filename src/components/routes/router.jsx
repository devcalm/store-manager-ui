import React from "react";
import ROUTES from './routes';
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage.jsx";
import RootLayout from "../../pages/Root/RootLayout.jsx";
import { VendorCreatePage, VendorUpdatePage, VendorViewPage } from "../../pages/Vendor/index.js";
import { vendorLoader, vendorsLoader } from "./loaders.js";

const Vendors = React.lazy(() => import("../../pages/Vendor/VendorListPage.jsx") ) 


const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: ROUTES.VENDORS,
                element: <Vendors />,
                loader: vendorsLoader
            },
            {
                path: ROUTES.VENDOR_CREATE,
                element: <VendorCreatePage />
            },
            {
                path: ROUTES.VENDOR_EDIT(':id'),
                element: <VendorUpdatePage />,
                loader: vendorLoader
            },
            {
                path: ROUTES.VENDOR_DETAIL(':id'),
                element: <VendorViewPage />
            }
        ]
    }
]);

export default router; 