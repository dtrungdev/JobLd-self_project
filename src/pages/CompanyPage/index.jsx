import classNames from 'classnames/bind';
import styles from './Companypage.module.scss';

import Header from '../../components/Header';
import CompanyOverview from '../../components/CompanyOverview';

const cl = classNames.bind(styles);
function CompanyPage() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <CompanyOverview />
            </div>
        </div>
    );
}

export default CompanyPage;
