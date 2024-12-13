import { Outlet } from "react-router-dom";
import css from "./styles.module.scss";

export default function RootLayout() {
    return (
        <main className={css.appMain}>
            <Outlet />
        </main>
    );
}