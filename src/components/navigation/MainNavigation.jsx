import ROUTES from "../routes/routes";
import css from "./styles.module.scss";
import { NavLink } from "react-router";
import VendorIcon from '../../assets/images/vendor.svg?react';
import CategoryIcon from '../../assets/images/category.svg?react';
import StoreIcon from '../../assets/images/store.svg?react';
import ProductIcon from '../../assets/images/product.svg?react';

export default function MainNavigation() {
    return (
        <aside className={css.sidebar}>
            <div className={css.sidebarBrand}>
                <NavLink to={ROUTES.HOME}>
                    <span>Dash</span>Stack
                </NavLink>
            </div>
            <nav>
                <ul className={css.list}>
                    <li>
                        <NavLink
                            to={ROUTES.VENDORS}
                            className={({ isActive }) =>
                                isActive ? css.active : undefined
                            }
                        >
                            <div className={css.itemWrapper}>
                                <VendorIcon fill="#202224" width="24" height="24" />
                                <div>Vendors</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={ROUTES.CATEGORIES}
                            className={({ isActive }) =>
                                isActive ? css.active : undefined
                            }
                        >
                            <div className={css.itemWrapper}>
                                <CategoryIcon fill="#202224" width="24" height="24" />
                                <div>Category</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={ROUTES.PRODUCTS}
                            className={({ isActive }) =>
                                isActive ? css.active : undefined
                            }
                        >
                            <div className={css.itemWrapper}>
                                <ProductIcon fill="#202224" width="24" height="24" />
                                <div>Products</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={ROUTES.STORES}
                            className={({ isActive }) =>
                                isActive ? css.active : undefined
                            }
                        >
                            <div className={css.itemWrapper}>
                                <StoreIcon fill="#202224" width="24" height="24" />
                                <div>Stores</div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}