import classNames from 'classnames/bind';
import styles from './CompanyPage.module.scss';
import { Button } from 'react-bootstrap';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CompanyList from '../../components/CompanyList';

const cl = classNames.bind(styles);
function CompanyPage() {
    return (
        <main>
            <Header />
            <div className={cl('wrapper')}>
                <div className={cl('content', 'container')}>
                    <div className={cl('d-flex')}>
                        <div className={cl('search-company', 'col')}>
                            <h2 className={cl('search-title')}>Khám phá những công ty nổi bật</h2>
                            <p className={cl('search-text')}>
                                Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn
                            </p>
                            <div className={cl('search-input')}>
                                <FontAwesomeIcon icon={faSearch} className={cl('icon')} />
                                <input type="text" placeholder="Nhập tên công ty..." className={cl('input-search')} />
                                <Button className={cl('btn-search')}>Tìm kiếm</Button>
                            </div>
                        </div>
                        <div className={cl('box-img', 'd-none', 'd-lg-block')}>
                            <img
                                src="https://static.topcv.vn/v4/image/brand-identity/company-billBoard.png?v=1.0.0"
                                alt=""
                                className={cl('img-responsive')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CompanyList />
        </main>
    );
}

export default CompanyPage;
