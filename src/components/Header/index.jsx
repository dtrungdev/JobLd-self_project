import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cl = classNames.bind(styles);
function Header() {
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
                            <a href="">Việc làm</a>
                        </li>
                        <li className={cl('nav-left_item')}>
                            <a href="">Hồ sơ & CV</a>
                        </li>
                        <li className={cl('nav-left_item')}>
                            <a href="">Công ty</a>
                        </li>
                        <li className={cl('nav-left_item')}>
                            <a href="">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className={cl('nav-right')}>
                    <Button variant="outline-primary" className={cl('login-btn')} onClick={() => navigate('/login')}>
                        Đăng nhập
                    </Button>
                    <Button variant="primary" className={cl('register-btn')} onClick={() => navigate('/register')}>
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
                    <Offcanvas.Header className={cl('offcanvas-header')} closeButton>
                        <img src={logo} alt="" style={{ height: '40px' }} />
                        <Offcanvas.Title className={cl('offcanvas-title')}>JobLd</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={cl('offcanvas-body')}>
                        <div className={cl('body-item')}>Đăng ký tài khoản mới</div>
                        <div className={cl('body-item')}>Đăng nhập</div>
                        <div className={cl('body-item')}>Việc làm</div>
                        <div className={cl('body-item')}>Hồ sơ và CV</div>
                        <div className={cl('body-item')}>Công ty</div>
                        <div className={cl('body-item')}>Blog</div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </header>
    );
}

export default Header;
