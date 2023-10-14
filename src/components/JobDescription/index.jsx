import classNames from 'classnames/bind';
import styles from './JobDescription.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBriefcase, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);
function JobDescription() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <div className={cl('job-overview')}>
                    <div className={cl('photo')}></div>
                    <div className={cl('d-flex', 'flex-column', 'gap-2')}>
                        <div className={cl('d-inline-block', 'row-text')}>
                            <FontAwesomeIcon className={cl('icon')} icon={faLocationDot} /> 3rd Floor, Rivera Park
                            Building, 7/28 Thanh Thai, District 10, Ho Chi Minh
                            <Link className={cl('show-more')}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </Link>
                        </div>
                        <div className={cl('d-inline-block', 'row-text')}>
                            <FontAwesomeIcon className={cl('icon')} icon={faBriefcase} />
                            Tại văn phòng
                        </div>
                        <div className={cl('d-inline-block', 'row-text')}>
                            <FontAwesomeIcon className={cl('icon')} icon={faClock} />
                            Đăng 1 phút trước
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;
