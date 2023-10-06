import classNames from 'classnames/bind';
import styles from './RegisterPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEyeSlash, faShield, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
///fecht data from sever
import { registerNewUser } from '../../services/userService';

const cl = classNames.bind(styles);
function RegisterPage() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const defaultObjectValidInput = {
        isValidFullname: true,
        isValidEmail: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    };
    const [objectValidInput, setObjectValidInput] = useState(defaultObjectValidInput);

    //validate Inputs
    const isValidInputs = () => {
        if (!fullname && !email && !password) {
            setObjectValidInput({
                ...defaultObjectValidInput,
                isValidFullname: false,
                isValidEmail: false,
                isValidPassword: false,
                isValidConfirmPassword: false,
            });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập thông tin.');
            return false;
        }
        if (!fullname) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidFullname: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập họ tên.');
            return false;
        }
        //check email format
        let regularExpression = /\S+@\S+\.\S+/;
        if (!email) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidEmail: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập email.');
            return false;
        }
        if (!regularExpression.test(email)) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidEmail: false });
            setIsShowAlert(true);
            setAlertMessage('Định dạng email không đúng.');
            return false;
        }
        if (!password) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidPassword: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập mật khẩu.');
            return false;
        }
        if (!confirmPassword) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidConfirmPassword: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập lại mật khẩu.');
            return false;
        }
        if (password != confirmPassword) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidPassword: false, isValidConfirmPassword: false });
            setIsShowAlert(true);
            setAlertMessage('Mật khẩu không trùng khớp!');
            return false;
        }
        setIsShowAlert(false);
        setObjectValidInput(defaultObjectValidInput);
        return true;
    };

    const handleRegister = async () => {
        let check = isValidInputs();
        if (check === true) {
            let response = await registerNewUser(fullname, email, password);
            let serverData = response.data;
            if (+serverData.EC === 0) {
                navigate('/');
            } else {
                setIsShowAlert(true);
                setAlertMessage(serverData.EM);
            }
        }
    };

    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'd-flex', 'flex-wrap-reverse')}>
                <div className={cl('auth')}>
                    <div className={cl('auth-inner')}>
                        <div className={cl('auth-form')}>
                            <header className={cl('header')}>
                                <h2 className={cl('title')}>Chào mừng bạn đến với JobLd</h2>
                                <div className={cl('info')}>
                                    Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                                </div>
                            </header>
                            <div className={isShowAlert === true ? cl('alert-message') : cl('hidden')}>
                                {alertMessage}
                            </div>
                            <div className={cl('register')}>
                                <div className={cl('form-group')}>
                                    <label htmlFor="fullname">Họ và tên</label>
                                    <div
                                        className={
                                            objectValidInput.isValidFullname
                                                ? cl('input-group')
                                                : cl('input-group', 'error')
                                        }
                                    >
                                        <span className={cl('icon-box')}>
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                        <input
                                            type="text"
                                            name=""
                                            id="fullname"
                                            placeholder="Nhập họ tên"
                                            value={fullname}
                                            onChange={(event) => setFullname(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={cl('form-group')}>
                                    <label htmlFor="email">Email</label>
                                    <div
                                        className={
                                            objectValidInput.isValidEmail
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
                                            placeholder="Nhập email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className={cl('form-group')}>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <div
                                        className={
                                            objectValidInput.isValidPassword
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
                                            placeholder="Nhập mật khẩu"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        <span className={cl('icon-box', 'hide-password')}>
                                            <FontAwesomeIcon
                                                onClick={() => setIsShowPassword(!isShowPassword)}
                                                icon={isShowPassword === false ? faEyeSlash : faEye}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className={cl('form-group')}>
                                    <label htmlFor="password">Xác nhận mật khẩu</label>
                                    <div
                                        className={
                                            objectValidInput.isValidConfirmPassword
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
                                            placeholder="Nhập lại mật khẩu"
                                            value={confirmPassword}
                                            onChange={(event) => setConfirmPassword(event.target.value)}
                                        />
                                        <span className={cl('icon-box', 'hide-password')}>
                                            <FontAwesomeIcon
                                                onClick={() => setIsShowPassword(!isShowPassword)}
                                                icon={isShowPassword === false ? faEyeSlash : faEye}
                                            />
                                        </span>
                                    </div>
                                </div>

                                <Button variant="primary" className={cl('btn-sign')} onClick={() => handleRegister()}>
                                    Đăng ký
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
                                    <span>Bạn đã có tài khoản? </span>
                                    <Link to="/login" relative="path" className={cl('text-success')}>
                                        Đăng nhập ngay
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

export default RegisterPage;
