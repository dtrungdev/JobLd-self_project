import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './HeaderRecruiterPage.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cl = classNames.bind(styles);
function HeaderRecruiterPage() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header className={cl('wrapper')}>
            <div className={cl('inner')}>
                <Link className={cl('logo')} to="/">
                    <img src={logo} alt="JobLd" />
                </Link>
                <div className={cl('nav-left')}>
                    <ul>
                        <li className={cl('nav-left_item')}>
                            <Link to="/recruiter">Giới thiệu</Link>
                        </li>
                        <li className={cl('nav-left_item')}>
                            <Link to="/recruiter">Hỗ trợ</Link>
                        </li>
                    </ul>
                </div>
                <div className={cl('nav-right')}>
                    <Button
                        variant="outline-primary"
                        className={cl('login-btn')}
                        onClick={() => navigate('/recruiter/login')}
                    >
                        Đăng nhập
                    </Button>
                    <Button
                        variant="primary"
                        className={cl('register-btn')}
                        onClick={() => navigate('/recruiter/register')}
                    >
                        Đăng ký
                    </Button>
                    <div className={cl('change-language')}>
                        <a href="">VI</a>
                        <div className={cl('spacer-change')}></div>
                        <a href="">EN</a>
                    </div>
                </div>
                <div className={cl('offcanvas-toggle')} onClick={() => handleShow()}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.HeaderRecruiterPage className={cl('offcanvas-HeaderRecruiterPage')} closeButton>
                        <img src={logo} alt="" style={{ height: '40px' }} />
                        <Offcanvas.Title className={cl('offcanvas-title')}>JobLd</Offcanvas.Title>
                    </Offcanvas.HeaderRecruiterPage>
                    <Offcanvas.Body className={cl('offcanvas-body')}>
                        <Link to="/register" className={cl('body-item')}>
                            Đăng ký tài khoản mới
                        </Link>
                        <Link to="/login" className={cl('body-item')}>
                            Đăng nhập
                        </Link>
                        <Link to="/job" className={cl('body-item')}>
                            Việc làm
                        </Link>
                        <Link to="/cv" className={cl('body-item')}>
                            Hồ sơ và CV
                        </Link>
                        <Link to="/company" className={cl('body-item')}>
                            Công ty
                        </Link>
                        <Link to="/blog" className={cl('body-item')}>
                            Blog
                        </Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </header>
    );
}

export default HeaderRecruiterPage;
