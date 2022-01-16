import TopMenu from "./TopMenu";

import styles from './Layout.module.css';

const Layout = (props) => {
    const { header } = props;
    return (
        <>
            <TopMenu />
            <main className={styles.main}>
                {header ? (<h1>{header}</h1>) : null}
                {props.children}
            </main>
        </>
    )
}

export default Layout
