import classNames from 'classnames/bind';
import styles from './Companypage.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const cl = classNames.bind(styles);
function CompanyPage() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <div className={cl('company-overview')}></div>
                <div className={cl('company-detail')}></div>
            </div>
        </div>
    );
}

export default CompanyPage;
