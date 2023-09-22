import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
const cl = classNames.bind(styles);
function RegisterPage() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}></div>
        </div>
    );
}

export default RegisterPage;
