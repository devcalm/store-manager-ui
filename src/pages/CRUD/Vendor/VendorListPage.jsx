import { useLoaderData, useNavigate, Link } from "react-router-dom";
import PageContent from "../../../components/content/PageContent.jsx"
import Listing from "../../../components/listing/Listing.jsx";
import { formatDateTime, truncate } from "../../../utils/fortmatter.js";
import Actions from "../../../components/listing/Actions.jsx";
import ROUTES from "../../../components/routes/routes.js";
import Action from "../../../components/form/Action.js";
import API from "../../../utils/axios/apiRoutes.js";
import Button from "../../../components/ui/buttons/Button.jsx";

export default function VendorListPage() {
    const response = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const response = await Action.remove(API.VENDOR_DETAIL(id));
        navigate(ROUTES.VENDORS);
    };

    const values = response.content.map((row) => {
        return [
            { key: "id", value: row.id },
            { key: "name", value: truncate(row.name) },
            { key: "description", value: truncate(row.description) },
            { key: "createdAt", value: formatDateTime(row.createdAt) },
            {
                key: "actions", value:
                    <Actions
                        edit={ROUTES.VENDOR_EDIT(row.id)}
                        view={ROUTES.VENDOR_DETAIL(row.id)}
                        onDelete={() => handleDelete(row.id)}
                    />
            }
        ];
    });

    const headers = [
        { name: "id", type: "text" },
        { name: "name", type: "text" },
        { name: "description", type: "text" },
        { name: "created_at", type: "date" },
        { name: "actions", type: "action" }
    ];

    return (
        <PageContent title="Vendors">
            <Link to={ROUTES.VENDOR_CREATE}>
                <Button text="Create" classBtn="btnSuccess" />
            </Link>

            <Listing
                headers={headers}
                values={values}
            />
        </PageContent>
    );
}