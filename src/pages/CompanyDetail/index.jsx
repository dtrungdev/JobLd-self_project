import classNames from 'classnames/bind';
import styles from './CompanyDetail.module.scss';

import Header from '../../components/Header';
import CompanyOverview from '../../components/CompanyOverview';
import CompanyIntroduce from '../../components/CompanyIntroduce';
import CompanyContact from '../../components/CompanyContact';
import CompanyBenefit from '../../components/CompanyBenefit';
import CompanyJob from '../../components/CompanyJobs';

const cl = classNames.bind(styles);
function CompanyDetail() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <CompanyOverview />
                <div className={cl('main')}>
                    <div className={cl('main-content', 'container')}>
                        <div className={cl('row')}>
                            <div className={cl('col-lg-8')}>
                                <div className={cl('switch-page')}>
                                    <div className={cl('company-overview')}>Giới thiệu</div>
                                    <div className={cl('company-review')}>Đánh giá</div>
                                </div>
                                <div className=""></div>
                                <CompanyIntroduce />
                                <CompanyBenefit />
                                <CompanyJob />
                            </div>
                            <div className={cl('col-lg-4')}>
                                <CompanyContact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyDetail;
