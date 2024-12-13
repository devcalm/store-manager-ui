import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage.jsx";
import RootLayout from "../../pages/Root/RootLayout.jsx";
import { VendorListPage, VendorCreatePage, VendorUpdatePage, VendorViewPage } from "../../pages/Vendor";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'vendors',
                element: <VendorListPage />
            },
            {
                path: 'vendors/create',
                element: <VendorCreatePage />
            },
            {
                path: 'vendors/update/:id',
                element: <VendorUpdatePage />
            },
            {
                path: 'vendors/:id',
                element: <VendorViewPage />
            }
        ]
    }
]);

export default router; 