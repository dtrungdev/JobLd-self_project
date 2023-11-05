import classNames from 'classnames/bind';
import styles from './CompanyListItem.module.scss';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

function CompanyListItem() {
    return (
        <div className={cl('wrapper', 'col-lg-4', 'col-sm-6')}>
            <div className={cl('content')}>
                <Link to={'/company/123'}>
                    <div className={cl('company-logo')}>
                        <Link className={cl('link')} to={'/company/123'}>
                            <img
                                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-transcosmos-viet-nam-61c9331426cc8.jpg"
                                alt=""
                                className={cl('logo')}
                            />
                        </Link>
                    </div>

                    <div className={cl('company-info')}>
                        <h3 className={cl('title')}>CÔNG TY TNHH BUYMED</h3>
                        <span className={cl('job-availble')}>7 việc làm đang tuyển dụng</span>
                        <p className={cl('description')}>
                            " Giới thiệu về thuocsi thuocsi.vn được thành lập từ năm 2018, là một trong những startup
                            thành công trong lĩnh vực công nghệ về y tế Hiện tại là cổng điện tử cung cấp thuốc cho hơn
                            1.000 nhà thuốc và phòng khám trên khắp Việt Nam. Là một trong những nơi làm việc thu hút
                            các tài năng trẻ với đam mê ứng dụng công nghệ 4.0 vào nền tảng vững vàng "
                        </p>
                    </div>
                    <div className={cl('overlay')}></div>
                </Link>
            </div>
        </div>
    );
}

export default CompanyListItem;
