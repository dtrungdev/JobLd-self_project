import classNames from 'classnames/bind';
import styles from './TopCompany.module.scss';

const cl = classNames.bind(styles);
function TopCompany() {
    return (
        <section className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <h2 className={cl('top-company_title')}>Top Công ty hàng đầu</h2>
                <div className={cl('top-company_box')}>
                    <div className={cl('top-company_slider')}>
                        <div className={cl('top-company_item')}>
                            <img
                                src="https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg"
                                alt=""
                                className={cl('company-img')}
                            />
                            <h3 className={cl('company-name')}>Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng</h3>
                        </div>
                        <div className={cl('top-company_item')}>
                            <img
                                src="https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg"
                                alt=""
                                className={cl('company-img')}
                            />
                            <h3 className={cl('company-name')}>Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng</h3>
                        </div>
                        <div className={cl('top-company_item')}>
                            <img
                                src="https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg"
                                alt=""
                                className={cl('company-img')}
                            />
                            <h3 className={cl('company-name')}>Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng</h3>
                        </div>
                        <div className={cl('top-company_item')}>
                            <img
                                src="https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg"
                                alt=""
                                className={cl('company-img')}
                            />
                            <h3 className={cl('company-name')}>Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng</h3>
                        </div>
                        <div className={cl('top-company_item')}>
                            <img
                                src="https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg"
                                alt=""
                                className={cl('company-img')}
                            />
                            <h3 className={cl('company-name')}>Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng</h3>
                        </div>
                        <div className={cl('top-company_item')}>
                            <img
                                src="https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg"
                                alt=""
                                className={cl('company-img')}
                            />
                            <h3 className={cl('company-name')}>Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng</h3>
                        </div>
                        <div className={cl('top-company_item')}>
                            <img
                                src="https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg"
                                alt=""
                                className={cl('company-img')}
                            />
                            <h3 className={cl('company-name')}>Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopCompany;
