import classNames from 'classnames/bind';
import styles from './CompanyPage.module.scss';
import { Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CompanyList from '../../components/CompanyList';
import { fetchAllCompany } from '../../services/companyService';
import { useState, useEffect } from 'react';
import { Wrapper as PopperWrapper } from '../../components/Popper';
import SearchItem from '../../components/SearchItem';

const cl = classNames.bind(styles);
function CompanyPage() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const fetchCompany = async () => {
        let response = await fetchAllCompany();
        if (response && response.data && response.data.EC === 0) {
            setSearchResult(response.data.DT);
        }
        return;
    };

    useEffect(() => {
        fetchCompany();
    }, []);

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
                                <input
                                    type="text"
                                    placeholder="Nhập tên công ty..."
                                    className={cl('input-search')}
                                    onChange={(event) => setSearchValue(event.target.value)}
                                    value={searchValue}
                                />
                                {searchValue && searchResult ? (
                                    <PopperWrapper className={cl('search-result')}>
                                        {searchResult
                                            .filter((obj) => {
                                                return obj.name
                                                    .normalize('NFD')
                                                    .replace(/[\u0300-\u036f]/g, '')
                                                    .toLowerCase()
                                                    .includes(
                                                        searchValue
                                                            .normalize('NFD')
                                                            .replace(/[\u0300-\u036f]/g, '')
                                                            .toLowerCase(),
                                                    );
                                            })
                                            .map((item) => {
                                                return <SearchItem value={item} key={item.id} />;
                                            })}
                                    </PopperWrapper>
                                ) : (
                                    <></>
                                )}
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
            <Footer />
        </main>
    );
}

export default CompanyPage;
