import classNames from 'classnames/bind';
import styles from './Companypage.module.scss';

import Header from '../../components/Header';
import CompanyOverview from '../../components/CompanyOverview';
import CompanyIntroduce from '../../components/CompanyIntroduce';
import CompanyContact from '../../components/CompanyContact';

const cl = classNames.bind(styles);
function CompanyPage() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <CompanyOverview />
                <div className={cl('main')}>
                    <div className={cl('main-content', 'container')}>
                        <div className={cl('row')}>
                            <div className={cl('col-md-8')}>
                                <div className={cl('switch-page')}>
                                    <div className={cl('company-overview')}>Giới thiệu</div>
                                    <div className={cl('company-review')}>Đánh giá</div>
                                </div>
                                <div className=""></div>
                                <CompanyIntroduce />
                            </div>
                            <div className={cl('col-md-4')}>
                                <CompanyContact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyPage;
