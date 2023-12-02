import classNames from 'classnames/bind';
import styles from './RecruiterRegister.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faChevronRight,
    faEnvelope,
    faEyeSlash,
    faPhone,
    faShield,
    faUser,
    faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import Selection from '../../components/Selection';
///fecht data from sever
import { registerNewUser } from '../../services/userService';

const cl = classNames.bind(styles);
function RecruiterRegister() {
    const listGender = [
        { id: 1, name: 'Nam' },
        { id: 2, name: 'Nữ' },
    ];

    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const [isContinueRegister, setIsContinueRegister] = useState(false);

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
                isValidEmail: false,
                isValidPassword: false,
                isValidConfirmPassword: false,
            });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập thông tin.');
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

    const handleContinueRegister = () => {
        setIsContinueRegister(true);
    };

    const handleRegister = async () => {
        let check = isValidInputs();
        if (check === true) {
            let response = await registerNewUser(fullname, email, password);
            let serverData = response;
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
                                <h2 className={cl('title')}>Chào mừng nhà tuyển dụng đến với JobLd</h2>
                                <div className={cl('info')}>Tìm kiếm ứng viên phù hợp với công ty của bạn</div>
                            </header>
                            <div className={isShowAlert === true ? cl('alert-message') : cl('hidden')}>
                                {alertMessage}
                            </div>
                            <div className={cl('register')}>
                                {isContinueRegister == false ? (
                                    <div className={cl('register-form')}>
                                        <div className={cl('form-group')}>
                                            <h2 className={cl('step-to-continue')}>Bước 1: Thông tin đăng nhập</h2>
                                        </div>

                                        <div className={cl('form-group')}>
                                            <label htmlFor="email" className={cl('label')}>
                                                Email đăng nhập <span className={cl('icon-required')}>*</span>
                                            </label>
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
                                                    onChange={(event) => {
                                                        setEmail(event.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className={cl('form-group')}>
                                            <label htmlFor="password" className={cl('label')}>
                                                Mật khẩu <span className={cl('icon-required')}>*</span>
                                            </label>
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
                                                    type={isShowPassword === false ? 'password' : 'text'}
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
                                            <label htmlFor="password" className={cl('label')}>
                                                Xác nhận mật khẩu <span className={cl('icon-required')}>*</span>
                                            </label>
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
                                                    type={isShowPassword === false ? 'password' : 'text'}
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
                                        <Button
                                            variant="primary"
                                            className={cl('btn-sign')}
                                            onClick={() => handleContinueRegister()}
                                        >
                                            Tiếp tục{' '}
                                            <FontAwesomeIcon icon={faChevronRight} className={cl('continue-icon')} />
                                        </Button>
                                    </div>
                                ) : (
                                    <div className={cl('register-form')}>
                                        <div className={cl('form-group')}>
                                            <h2 className={cl('step-to-continue')}>Bước 2: Hoàn tất thông tin</h2>
                                        </div>

                                        <div className={cl('d-flex', 'justify-content-between')}>
                                            <div className={cl('form-group')}>
                                                <label htmlFor="fullname" className={cl('label')}>
                                                    Họ và tên <span className={cl('icon-required')}>*</span>
                                                </label>
                                                <div
                                                    className={
                                                        objectValidInput.isValidEmail
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
                                                        placeholder="Họ và tên"
                                                        value={email}
                                                        onChange={(event) => {
                                                            setEmail(event.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className={cl('form-group')}>
                                                <label className={cl('label')}>
                                                    Giới tính: <span className={cl('icon-required')}>*</span>
                                                </label>
                                                <Selection
                                                    showInputSearch={false}
                                                    listOption={listGender}
                                                    className={cl('select')}
                                                    classNameShowListOption={cl('list-option')}
                                                />
                                            </div>
                                        </div>

                                        <div className={cl('form-group')}>
                                            <label htmlFor="phone" className={cl('label')}>
                                                Số điện thoại cá nhân <span className={cl('icon-required')}>*</span>
                                            </label>
                                            <div
                                                className={
                                                    objectValidInput.isValidPassword
                                                        ? cl('input-group')
                                                        : cl('input-group', 'error')
                                                }
                                            >
                                                <span className={cl('icon-box')}>
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </span>
                                                <input
                                                    type={isShowPassword === false ? 'password' : 'text'}
                                                    name=""
                                                    id="phone"
                                                    placeholder="Số điện thoại cá nhân"
                                                    value={password}
                                                    onChange={(event) => setPassword(event.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className={cl('form-group')}>
                                            <label htmlFor="company" className={cl('label')}>
                                                Công ty <span className={cl('icon-required')}>*</span>
                                            </label>
                                            <div
                                                className={
                                                    objectValidInput.isValidEmail
                                                        ? cl('input-group')
                                                        : cl('input-group', 'error')
                                                }
                                            >
                                                <span className={cl('icon-box')}>
                                                    <FontAwesomeIcon icon={faBuilding} />
                                                </span>
                                                <input
                                                    type="text"
                                                    name=""
                                                    id="company"
                                                    placeholder="Tên công ty"
                                                    value={email}
                                                    onChange={(event) => {
                                                        setEmail(event.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className={cl('d-flex', 'justify-content-between')}>
                                            <div className={cl('form-group')}>
                                                <label className={cl('label')}>
                                                    Vị trí công tác <span className={cl('icon-required')}>*</span>
                                                </label>
                                                <Selection
                                                    showInputSearch={false}
                                                    listOption={listGender}
                                                    className={cl('select')}
                                                    classNameShowListOption={cl('list-option')}
                                                />
                                            </div>
                                            <div className={cl('form-group')}>
                                                <label className={cl('label')}>
                                                    Địa điểm làm việc <span className={cl('icon-required')}>*</span>
                                                </label>
                                                <Selection
                                                    showInputSearch={false}
                                                    listOption={listGender}
                                                    className={cl('select')}
                                                    classNameShowListOption={cl('list-option')}
                                                />
                                            </div>
                                        </div>

                                        <div className={cl('form-group')}>
                                            <label htmlFor="company" className={cl('label')}>
                                                Skype <span className={cl('icon-required')}>*</span>
                                            </label>
                                            <div
                                                className={
                                                    objectValidInput.isValidEmail
                                                        ? cl('input-group')
                                                        : cl('input-group', 'error')
                                                }
                                            >
                                                <input
                                                    type="text"
                                                    name=""
                                                    id="company"
                                                    placeholder="Tài khoản Skype"
                                                    value={email}
                                                    onChange={(event) => {
                                                        setEmail(event.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            variant="primary"
                                            className={cl('btn-sign')}
                                            onClick={() => handleContinueRegister()}
                                        >
                                            Đăng ký
                                        </Button>
                                    </div>
                                )}

                                <div className={cl('footer', 'text-center')}>
                                    <span> Đã có tài khoản? </span>
                                    <Link to="/login" relative="path" className={cl('text-success')}>
                                        Đăng nhập ngay
                                    </Link>
                                    <div className={cl('block')}>
                                        <Link to={'/'} className={cl('go-home')}>
                                            Về trang chủ
                                        </Link>
                                    </div>
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

export default RecruiterRegister;
