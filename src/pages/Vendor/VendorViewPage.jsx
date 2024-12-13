import { useParams } from "react-router-dom"
import PageContent from "../../components/content/PageContent.jsx"

export default function VendorViewPage() {
    const {id} = useParams();
    const title = `View ${id} vendor`;

    return (
        <PageContent title={title}>
        </PageContent>
    );
}