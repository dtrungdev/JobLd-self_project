import classNames from 'classnames/bind';
import styles from './CompanyContact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function CompanyContact() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <h2 className={cl('title')}>Thông tin liên hệ</h2>
                <div className={cl('description')}>
                    <div className={cl('social')}>
                        <span className={cl('social-title')}>Mạng xã hội</span>
                        <div className={cl('social-icons')}>
                            <FontAwesomeIcon icon={faFacebook} className={cl('social-icon')} />
                            <FontAwesomeIcon icon={faGlobe} className={cl('social-icon')} />
                            <FontAwesomeIcon icon={faLinkedin} className={cl('social-icon')} />
                            <FontAwesomeIcon icon={faTwitter} className={cl('social-icon')} />
                        </div>
                    </div>
                    <div className={cl('hotline')}>
                        Hotline / Số điện thoại <br></br>
                        <FontAwesomeIcon icon={faPhone} className={cl('icon')} />
                        <span className={cl('telephone')}>0288000111</span>
                    </div>
                    <div className={cl('address')}>
                        <FontAwesomeIcon icon={faLocationDot} className={cl('icon')} />
                        Địa chỉ công ty <br></br>
                        <span className={cl('address-detail')}>28bis Mạc Đĩnh Chi, phường Đa Kao, quận 1, TP.HCM</span>
                    </div>
                    <div></div>
                </div>
                <div className={cl('map')}></div>
            </div>
        </div>
    );
}

export default CompanyContact;
