import TopMenu from "./TopMenu";

import styles from '../../styles/Layout.module.css';

const Layout = (props) => {
    const { header } = props;
    return (
        <main className={styles.main}>
            <TopMenu />
            {header ? (<h1>{header}</h1>) : null}
            {props.children}
        </main>
    )
}

export default Layout
