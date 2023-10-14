import classNames from 'classnames/bind';
import styles from './ProfileAddingInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPenToSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);
function ProfileAddingInfo() {
    return (
        <div className={cl('wrapper ')}>
            <div className={cl('content')}>
                <div className={cl('box')}>
                    <div className={cl('card', 'contact-info')}>
                        <div className={cl('d-flex', 'align-items-center')}>
                            <div className={cl('avatar')}>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lKMPT87Y9CV25LjqXMyAcSvTCYJaKpw8cQ&usqp=CAU"
                                    alt=""
                                    className={cl('avatar-responsive')}
                                />
                            </div>
                            <div className={cl('info')}>
                                <h1 className={cl('contact-name')}>Everthing Alright</h1>
                                <div className={cl('infos', 'row', 'align-items-center')}>
                                    <div className={cl('info-item', 'col-lg-6')}>
                                        <FontAwesomeIcon icon={faEnvelope} className={cl('info-icon')} />
                                        everythingarright@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faPenToSquare} className={cl('absoluted-icon')} />
                    </div>
                </div>
                <div className={cl('box')}>
                    <div className={cl('card', 'about-me')}>
                        <h2 className={cl('strong-text')}>Giới thiệu bản thân</h2>
                        <span className={cl('normal-text')}>Giới thiệu điểm mạnh và số năm kinh nghiệm của bạn</span>
                        <FontAwesomeIcon icon={faPlusCircle} className={cl('absoluted-icon')} />
                    </div>
                </div>
                <div className={cl('box')}>
                    <div className={cl('card', 'work-experience')}>
                        <h2 className={cl('strong-text')}>Kinh nghiệm làm việc</h2>
                        <span className={cl('normal-text')}>
                            Thể hiện những thông tin chi tiết về quá trình làm việc
                        </span>
                        <FontAwesomeIcon icon={faPlusCircle} className={cl('absoluted-icon')} />
                    </div>
                </div>
                <div className={cl('box')}>
                    <div className={cl('card', 'skill')}>
                        <h2 className={cl('strong-text')}>Kỹ năng</h2>
                        <span className={cl('normal-text')}>Nêu bật các kỹ năng liên quan đến công việc</span>
                        <FontAwesomeIcon icon={faPlusCircle} className={cl('absoluted-icon')} />
                    </div>
                </div>
                <div className={cl('box')}>
                    <div className={cl('card', 'education')}>
                        <h2 className={cl('strong-text')}>Học vấn</h2>
                        <span className={cl('normal-text')}>Chia sẻ trình độ học vấn của bạn</span>
                        <FontAwesomeIcon icon={faPlusCircle} className={cl('absoluted-icon')} />
                    </div>
                </div>
                <div className={cl('box')}>
                    <div className={cl('card', 'certificate')}>
                        <h2 className={cl('strong-text')}>Chứng chỉ</h2>
                        <span className={cl('normal-text')}>
                            Cung cấp bằng chứng về chuyên môn và kỹ năng cụ thể của bạn
                        </span>
                        <FontAwesomeIcon icon={faPlusCircle} className={cl('absoluted-icon')} />
                    </div>
                </div>
                <div className={cl('box')}>
                    <div className={cl('card', 'award')}>
                        <h2 className={cl('strong-text')}>Giải thưởng & Danh hiệu</h2>
                        <span className={cl('normal-text')}>
                            Thể hiện kết quả và thành tích của bạn trong công việc
                        </span>
                        <FontAwesomeIcon icon={faPlusCircle} className={cl('absoluted-icon')} />
                    </div>
                </div>
                <div className={cl('box')}>
                    <div className={cl('card', 'project')}>
                        <h2 className={cl('strong-text')}>Dự án cá nhân</h2>
                        <span className={cl('normal-text')}>
                            Liệt kê một số dự án có liên quan để cho thấy bạn đã áp dụng khả năng của mình như thế nào
                        </span>
                        <FontAwesomeIcon icon={faPlusCircle} className={cl('absoluted-icon')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileAddingInfo;
