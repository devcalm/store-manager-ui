import css from "./styles.module.scss";
import { snakeToHumanReadable as formatter } from "../../utils/fortmatter";
import SearchText from "./SearchText";
import SearchDate from "./SearchDate";
import classNames from "classnames";

export default function Listing({ headers, values }) {

    function searchElement(head) {
        switch (head.type) {
            case "text": return <SearchText name={head.name} />;
            case "date": return <SearchDate name={head.name} />;
            default: return "";
        }
    }

    return (
        <table className={classNames(css.table, "mt-2")}>
            <thead>
                <tr>
                    {headers.map((head) => {
                        return (
                            <th scope="col" key={head.name}>
                                <div className={css.searchHead}>
                                    {searchElement(head)}
                                    <div> {formatter(head.name)}</div>
                                </div>

                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {values.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`}>
                        {row.map((cell) => (
                            <td key={cell.key}>{cell.value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

}