import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('row')}>
                    <div className={cl('column')}>
                        <div className={cl('footer-brand')}>
                            <img src={logo} alt="Logo" className={cl('footer-logo')} />
                            <FontAwesomeIcon icon={faThumbsUp} className={cl('footer-like')} />
                            <p className={cl('slogan')}>Tìm việc khó, có JobLd.</p>
                        </div>
                    </div>
                    <div className={cl('column')}>
                        <div className={cl('box-item')}>
                            <div className={cl('title')}>Mọi thông tin về JobLd</div>
                            <p className={cl('info')}>
                                JobLd, một website mở cung cấp dịch vụ tư vấn, môi giới việc làm cho người lao động mọi
                                ngành nghề. Mọi thông tin đều công khai và minh bạch giúp người dùng dễ dàng tiếp cận.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
