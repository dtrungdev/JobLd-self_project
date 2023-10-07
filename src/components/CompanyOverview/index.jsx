import classNames from 'classnames/bind';
import styles from './CompanyOverview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const cl = classNames.bind(styles);
function CompanyOverview() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('row')}>
                    <div className={cl('col-left', 'col-lg-8')}>
                        <div className={cl('img-frame')}>
                            <div className="company-logo">
                                <img
                                    src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN01VS3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--851497ff9bb44770571b6cf4ebb71500a0e4769f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/KMS%20healthcare%20logo%20-%20Anh%20Thu%20Lai.png"
                                    alt=""
                                    className={cl('img-fit')}
                                />
                            </div>
                        </div>
                        <div className={cl('company-info')}>
                            <h1 className={cl('company-name')}>KMS HealthCare</h1>
                            <div className={cl('d-flex')}>
                                <div className={cl('company-address')}>
                                    <FontAwesomeIcon icon={faLocationDot} className={cl('icon')} />
                                    <span className="city">Hồ Chí Minh - Đà Nẵng</span>
                                </div>
                                <div className={cl('job-available')}>
                                    <FontAwesomeIcon icon={faBriefcase} className={cl('icon')} />
                                    <span className={cl('job-quantities')}>3 việc làm đang tuyển dụng</span>
                                </div>
                            </div>
                            <div className={cl('company-interactive')}>
                                <Button variant="primary" className={cl('btn-interact', 'btn-review')}>
                                    Viết đánh giá
                                </Button>
                                <Button variant="primary" className={cl('btn-interact', 'btn-follow')}>
                                    Theo dõi
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cl('col-lg-4')}>
                        <div className={cl('d-flex', 'col-right')}>
                            <div className={cl('d-flex', 'align-items-center')}>
                                <span className={cl('vote')}>4.8</span>
                                <div className={cl('flex-column')}>
                                    <div className={cl('star-vote')}>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className={cl('quantities-vote')}>9 đánh giá</div>
                                </div>
                            </div>
                            <div className={cl('right', 'd-flex', 'align-items-center')}>
                                <span className={cl('vote')}>
                                    88
                                    <span className={cl('percent-vote')}>%</span>
                                </span>

                                <span className={cl('text-vote')}>Khuyến khích làm việc tại đây</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyOverview;
