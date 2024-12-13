import css from "./styles.module.scss";

export default function PageContentHeader({title}) {

    return(
        <div className={css.appContentHeader}>
            <h1>{title}</h1>
        </div>
    );
}