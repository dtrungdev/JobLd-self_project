import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cl = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cl('wrapper')}>
            <Header />
            <div className={cl('container-all')}>
                <div className={cl('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
