import styles from './Button.module.css';
import cn from 'classnames';
import Link from 'next/link';

const Button = ({ appearance = 'primary', link = '', callback, children, className, ...props }) => {
    return link ? (
        <Link href={link}>
            <a className={styles.button} {...props}>{children}</a>
        </Link>
    ) : (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.primary]: appearance === 'ghost',
            })}
            onClick={callback}
            {...props}
        >
            {children}
        </button>
    )

};

export default Button