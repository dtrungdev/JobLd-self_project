import classNames from 'classnames/bind';
import styles from './TopCompany.module.scss';

const cl = classNames.bind(styles);
function TopCompany() {
    return (
        <section className={cl('wrapper')}>
            <div className={cl('content')}></div>
        </section>
    );
}

export default TopCompany;
