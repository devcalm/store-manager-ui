import PageContentHeader from "./PageContentHeader";

export default function PageContent({ title, children }) {
    return (
        <>
            <PageContentHeader title={title} />
            {children}
        </>
    );
}