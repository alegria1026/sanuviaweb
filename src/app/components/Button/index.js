import styles from './Button.module.css';

const Button = ({ text, link }) => {
    return (
        <a href={link} className={styles.button}>
            {text}
        </a>
    );
};

export default Button;