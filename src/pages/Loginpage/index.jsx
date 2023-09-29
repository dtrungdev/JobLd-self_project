import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEyeSlash, faShield, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const cl = classNames.bind(styles);
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const defaultObjValueInput = {
        isValidValueInput: true,
        isValidPassword: true,
    };

    const [objValueInput, setObjValueInput] = useState(defaultObjValueInput);

    const handleLogin = () => {
        if (!email && !password) {
            setObjValueInput({ ...defaultObjValueInput, isValidValueInput: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập thông tin.');
            return;
        }
        if (!email) {
            setObjValueInput({ ...defaultObjValueInput, isValidValueInput: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập email.');
            return;
        } else {
            setObjValueInput({ ...defaultObjValueInput, isValidValueInput: true });
            setIsShowAlert(false);
        }
        if (!password) {
            setObjValueInput({ ...defaultObjValueInput, isValidPassword: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập mật khẩu.');
            return;
        } else {
            setObjValueInput({ ...defaultObjValueInput, isValidValueInput: true });
            setIsShowAlert(false);
        }
    };

    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'd-flex', 'flex-wrap-reverse')}>
                <div className={cl('auth')}>
                    <div className={cl('auth-inner')}>
                        <div className={cl('auth-form')}>
                            <header className={cl('header')}>
                                <h2 className={cl('title')}>Chào mừng bạn đã quay trở lại</h2>
                                <div className={cl('info')}>
                                    Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                                </div>
                            </header>
                            <div className={isShowAlert ? cl('alert-message') : cl('hidden')}>{alertMessage}</div>
                            <div className={cl('register')}>
                                <div className={cl('form-group')}>
                                    <label htmlFor="email">Email</label>
                                    <div
                                        className={
                                            objValueInput.isValidValueInput
                                                ? cl('input-group')
                                                : cl('input-group', 'error')
                                        }
                                    >
                                        <span className={cl('icon-box')}>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                        <input
                                            type="text"
                                            name=""
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cl('form-group')}>
                                    <label htmlFor="email">Password</label>
                                    <div
                                        className={
                                            objValueInput.isValidPassword
                                                ? cl('input-group')
                                                : cl('input-group', 'error')
                                        }
                                    >
                                        <span className={cl('icon-box')}>
                                            <FontAwesomeIcon icon={faShield} />
                                        </span>
                                        <input
                                            type={isShowPassword === true ? 'password' : 'text'}
                                            name=""
                                            id="password"
                                            placeholder="Mật khẩu"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        <span className={cl('icon-box', 'hide-password')}>
                                            <FontAwesomeIcon
                                                onClick={() => setIsShowPassword(!isShowPassword)}
                                                icon={isShowPassword === true ? faEyeSlash : faEye}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className={cl('forgot-password')}>Quên mật khẩu</div>
                                <Button variant="primary" className={cl('btn-sign')} onClick={handleLogin}>
                                    Đăng nhập
                                </Button>
                                <div className={cl('separate')}>Hoặc đăng nhập bằng</div>
                                <div className={cl('social-login')}>
                                    <a href="" className={cl('btn', 'btn-primary', 'btn-google')}>
                                        <FontAwesomeIcon icon={faGoogle} />
                                        Google
                                    </a>
                                    <a href="" className={cl('btn', 'btn-primary', 'btn-facebook')}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                        Facebook
                                    </a>
                                    <a href="" className={cl('btn', 'btn-primary', 'btn-linkedin')}>
                                        <FontAwesomeIcon icon={faLinkedin} />
                                        Linkedin
                                    </a>
                                </div>
                                <div className={cl('footer', 'text-center')}>
                                    <span>Bạn chưa có tài khoản? </span>
                                    <Link to="/register" relative="path" className={cl('text-success')}>
                                        Đăng ký ngay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl('right')}>
                    <div className={cl('text', 'd-flex', 'align-center', 'flex-column')}>
                        <img src={logo} alt="" style={{ width: '100px', marginBottom: '20px', alignItems: 'center' }} />
                        <div className={cl('brand-text')}>JobLb</div>
                        <div className={cl('slogan-text')}>Tìm việc khó, có JobLd</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
