import classNames from 'classnames/bind';
import styles from './CompanyListItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faChevronRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
                        <h3 className={cl('name')}>CÔNG TY TNHH BUYMED</h3>
                        <p className={cl('address')}>
                            <FontAwesomeIcon icon={faLocationDot} className={cl('icon')} />
                            Hồ Chí Minh
                        </p>
                        <p className={cl('category')}>
                            <FontAwesomeIcon icon={faBuilding} className={cl('icon')} />
                            Bất động sản
                        </p>
                        <span className={cl('job-availble')}>
                            7 việc làm đang tuyển dụng{' '}
                            <FontAwesomeIcon icon={faChevronRight} className={cl('job-availble_icon')} />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CompanyListItem;
