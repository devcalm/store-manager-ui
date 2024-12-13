
import { useParams } from "react-router-dom"
import PageContent from "../../components/content/PageContent.jsx"

export default function VendorUpdatePage() {
    const {id} = useParams();
    const title = `Update ${id} vendor`;

    return (
        <PageContent title={title}>
           <h2>UPdate</h2>
        </PageContent>
    );
}