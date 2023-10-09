import classNames from 'classnames/bind';
import styles from './JobDetail.module.scss';
import Header from '../../components/Header';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import JobDescription from '../../components/JobDescription';

const cl = classNames.bind(styles);

function JobDetail() {
    return (
        <>
            <Header />
            <div className={cl('box')}>
                <div className={cl('wrapper')}>
                    <div className={cl('content', 'container')}>
                        <div className={cl('row')}>
                            <div className={cl('col-lg-8')}>
                                <div className={cl('information')}>
                                    <div className={cl('overview')}>
                                        <h1 className={cl('job-name')}>
                                            [VSL] Software Leader & Engineers for SDK Project
                                        </h1>
                                        <p className={cl('job-company')}>LG Electronics Development Vietnam (LGEDV)</p>
                                        <div className={cl('job-action')}>
                                            <div
                                                className={cl(
                                                    'd-flex',
                                                    'align-items-center',
                                                    'justify-content-between',
                                                )}
                                            >
                                                <Button className={cl('btn-apply')}>Ứng tuyển</Button>
                                                <Link className={cl('save-job')}>
                                                    <FontAwesomeIcon icon={faHeart} className={cl('action-icon')} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <JobDescription />
                                    </div>
                                </div>
                            </div>
                            <div className={cl('col-lg-4')}>
                                <div className={cl('company')}>
                                    <div className={cl('brand')}>
                                        <div className={cl('logo')}>
                                            <img
                                                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM09kSGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--17f3114b5ccf13089c59952d1800098c8d92a1c3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/Company%20logo.png"
                                                alt=""
                                                className={cl('logo-responsive')}
                                            />
                                        </div>
                                        <div className={cl('title')}>
                                            <h3 className={cl('company-name')}>One Mount Group</h3>
                                            <Link className={cl('show-more')}>
                                                Xem công ty{' '}
                                                <FontAwesomeIcon
                                                    icon={faArrowUpRightFromSquare}
                                                    className={cl('more-icon')}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={cl('company-detail')}>
                                        <div className={cl('item')}>
                                            <div className={cl('grey-text')}>Mô hình công ty</div>
                                            <div className={cl('black-text')}>Sản phẩm</div>
                                        </div>
                                        <div className={cl('item')}>
                                            <div className={cl('grey-text')}>Quy mô công ty</div>
                                            <div className={cl('black-text')}>10 người</div>
                                        </div>
                                        <div className={cl('item')}>
                                            <div className={cl('grey-text')}>Thời gian làm việc</div>
                                            <div className={cl('black-text')}>Thứ 2 - Thứ 6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobDetail;
