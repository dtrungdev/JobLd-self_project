import { Button } from 'react-bootstrap';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/images/logo.svg';

const cl = classNames.bind(styles);
function Header() {
    return (
        <header className={cl('wrapper')}>
            <div className={cl('inner')}>
                <div className={cl('logo')}>
                    <img src={logo} alt="JobLd" />
                </div>
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
                    <Button variant="outline-primary" className={cl('login-btn')}>
                        Đăng nhập
                    </Button>
                    <Button variant="primary" className={cl('register-btn')}>
                        Đăng ký
                    </Button>
                    <div className={cl('change-language')}>
                        <a href="">VI</a>
                        <div className={cl('spacer-change')}></div>
                        <a href="">EN</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
