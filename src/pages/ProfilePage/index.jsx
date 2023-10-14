import classNames from 'classnames/bind';
import styles from './ProfilePage.module.scss';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCirclePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import ProfileAddingInfo from '../../components/ProfileAddingInfo';

const cl = classNames.bind(styles);

function ProfilePage() {
    return (
        <>
            <Header />
            <div className={cl('wrapper')}>
                <div className={cl('action-page')}>
                    <Link className={cl('action')}>Hồ sơ</Link>
                    <Link className={cl('action')}>Quản lý CV</Link>
                    <Link className={cl('action')}>Tiêu chí tìm việc</Link>
                </div>
                <div className={cl('content', 'container')}>
                    <div className={cl('main', 'row')}>
                        <div className={cl('col-lg-4')}>
                            <div className={cl('info-card')}>
                                <h3 className={cl('info-card_title')}>Nâng cấp hồ sơ lên mức "Rất tốt" để tải CV</h3>
                                <div className={cl('progress-info')}>
                                    <div
                                        className={cl(
                                            'd-flex',
                                            'align-items-center',
                                            'justify-content-center',
                                            'gap-4',
                                        )}
                                    >
                                        <div className="progress-chart">
                                            <FontAwesomeIcon icon={faCircle} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className={cl('suggestion')}>Cách nâng cấp hồ sơ lên mức "Rất tốt"</div>
                                <div className={cl('row', 'py-3')}>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Giới thiệu bản thân
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Thông tin cá nhân
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Kinh nghiệm làm việc
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Học vấn
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Kỹ năng
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Chứng chỉ
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Giải thưởng và Danh hiệu
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faCirclePlus} />
                                            Thêm Dự án cá nhân
                                        </button>
                                    </div>
                                    <div className={cl('width-100')}>
                                        <button className={cl('add-info')}>
                                            <FontAwesomeIcon className={cl('icon')} icon={faChevronDown} />
                                            Thêm thông tin khác
                                        </button>
                                    </div>
                                </div>
                                <div className={cl('quick-action')}>
                                    <Link className={cl('quick-action_btn')}>Xem và tải CV</Link>
                                    <Link className={cl('quick-action_btn')}>Điền hồ sơ tự động</Link>
                                </div>
                            </div>
                        </div>
                        <div className={cl('information', 'col-lg-8')}>
                            <ProfileAddingInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
