import PageContentHeader from "./PageContentHeader";
import css from "./styles.module.scss";

export default function PageContent({ title, children }) {
    return (
        <>
            <PageContentHeader title={title} />
            {children}
        </>
    );
}