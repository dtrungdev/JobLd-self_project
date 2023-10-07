import classNames from 'classnames/bind';
import styles from './CompanyListItem.module.scss';

const cl = classNames.bind(styles);

function CompanyListItem() {
    return (
        <div className={cl('wrapper', 'col-lg-4', 'col-sm-6')}>
            <div className={cl('content')}>
                <div className={cl('company-banner')}>
                    <a href="">
                        <img
                            src="https://static.topcv.vn/company_covers/cong-ty-tnhh-buymed-f95dc7cac15325af4367f3c8cf5ee0f6-5ff7dd182c9d8.jpg"
                            alt=""
                            className={cl('img-banner')}
                        />
                    </a>
                </div>
                <div className={cl('company-info')}>
                    <h3 className={cl('title')}>CÔNG TY TNHH BUYMED</h3>
                    <p className={cl('description')}>
                        " Giới thiệu về thuocsi thuocsi.vn được thành lập từ năm 2018, là một trong những startup thành
                        công trong lĩnh vực công nghệ về y tế Hiện tại là cổng điện tử cung cấp thuốc cho hơn 1.000 nhà
                        thuốc và phòng khám trên khắp Việt Nam. Là một trong những nơi làm việc thu hút các tài năng trẻ
                        với đam mê ứng dụng công nghệ 4.0 vào nền tảng vững vàng "
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CompanyListItem;
