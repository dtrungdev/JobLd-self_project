import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListJobItem.module.scss';
import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cl = classNames.bind(styles);

function ListJobItem() {
    return (
        <div className={cl('wrapper', 'col-lg-4', 'col-sm-6')}>
            <div className={cl('list-job_item')}>
                <div className={cl('header')}>
                    <div className={cl('avatar')}>
                        <div className={cl('company-logo')}>
                            <img
                                src="https://cdn-new.topcv.vn/unsafe/200x/filters:format(webp)/https://static.topcv.vn/company_logos/cong-ty-co-phan-truyen-thong-va-cong-nghe-dai-viet-64118b52c0f80.jpg"
                                alt=""
                                className={cl('img-responsive')}
                            />
                        </div>
                    </div>
                    <div className={cl('col-title', 'text-ellipsis')}>
                        <h3>
                            <a href="" className={cl('job-title', 'text-ellipsis')}>
                                Nhân viên tư vấn tuyển sinh sdgdshst
                            </a>
                        </h3>
                        <a href="" className={cl('job-descript', 'text-ellipsis')}>
                            Công ty TNHH MTV KKK rehgrtdhjsdgfdsghfdh
                        </a>
                    </div>
                </div>
                <div className={cl('footer')}>
                    <div className={cl('col-job-info')}>
                        <div className={cl('salary')}>
                            <span className={cl('text-ellipsis')}>Trên 10 triệu</span>
                        </div>
                        <div className={cl('address')}>
                            <span className={cl('text-ellipsis')}>Hà Nội, Hồ Chí Minh</span>
                        </div>
                    </div>
                    <div className={cl('col-like')}>
                        <button className={cl('save-job', 'btn')}>
                            <FontAwesomeIcon icon={faHeart} className={cl('icon')} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListJobItem;
