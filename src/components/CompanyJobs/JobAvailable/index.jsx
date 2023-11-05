import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './JobAvailable.module.scss';
import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';

const cl = classNames.bind(styles);

function JobAvailable() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('list-job_item')}>
                <div className={cl('d-flex', 'align-items-center', 'flex-column', 'flex-md-row')}>
                    <div className={cl('left')}>
                        <div className={cl('avatar')}>
                            <div className={cl('company-logo')}>
                                <img
                                    src="https://cdn-new.topcv.vn/unsafe/200x/filters:format(webp)/https://static.topcv.vn/company_logos/cong-ty-co-phan-truyen-thong-va-cong-nghe-dai-viet-64118b52c0f80.jpg"
                                    alt=""
                                    className={cl('img-responsive')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cl('right', 'd-flex', 'flex-column')}>
                        <div className={cl('title')}>
                            <div className={cl('col-title', 'text-ellipsis')}>
                                <h3>
                                    <a href="" className={cl('job-title')}>
                                        Nhân viên tư vấn tuyển sinh sdgdshst
                                    </a>
                                </h3>
                                <a href="" className={cl('job-descript', 'text-ellipsis')}>
                                    Công ty TNHH MTV KKK rehgrtdhjsdgfdsghfdh
                                </a>
                            </div>

                            <div className={cl('col-salary')}>10 - 15 triệu</div>
                        </div>
                        <div className={cl('info', 'd-flex', 'justify-content-between')}>
                            <div className={cl('d-flex', 'flex-wrap', 'gap-2')}>
                                <div className={cl('job-expire')}>
                                    <span className={cl('text-ellipsis')}>
                                        Còn <strong>85</strong> ngày để ứng tuyển
                                    </span>
                                </div>
                                <div className={cl('address')}>
                                    <span className={cl('text-ellipsis')}>Hà Nội, Hồ Chí Minh</span>
                                </div>
                                <div className={cl('update')}>
                                    <span className={cl('text-ellipsis')}>Cập nhật 1 ngày trước</span>
                                </div>
                            </div>

                            <div className={cl('action')}>
                                <Button className={cl('btn-apply', 'd-none', 'd-md-block')}>Ứng tuyển</Button>
                                <div className={cl('like')}>
                                    <button className={cl('save-job', 'btn')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobAvailable;
