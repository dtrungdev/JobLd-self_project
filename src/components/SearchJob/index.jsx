import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchJob.module.scss';
import classNames from 'classnames/bind';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '../Popper';
import SearchItem from '../SearchItem';
import Select from '../Select';
import TextSlider from './TextSlider';
import { fetchPositionToSearch } from '../../services/jobService';

const cl = classNames.bind(styles);

function SearchJob() {
    const navigate = useNavigate();

    const handleChooseSearchItem = (event) => {
        setSearchValue(event.target.innerText);
        navigate('/find-job');
    };

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const listCity = [
        { id: 0, name: 'Tất cả thành phố' },
        { id: 1, name: ' Hà Nội' },
        { id: 2, name: ' Hà Giang' },
        { id: 3, name: ' Cao Bằng' },
        { id: 4, name: ' Bắc Kạn' },
        { id: 5, name: ' Tuyên Quang' },
        { id: 6, name: ' Lào Cai' },
        { id: 7, name: ' Điện Biên' },
        { id: 8, name: ' Lai Châu' },
        { id: 9, name: ' Sơn La' },
        { id: 10, name: ' Yên Bái' },
        { id: 11, name: ' Hoà Bình' },
        { id: 12, name: ' Thái Nguyên' },
        { id: 13, name: ' Lạng Sơn' },
        { id: 14, name: ' Quảng Ninh' },
        { id: 15, name: ' Bắc Giang' },
        { id: 16, name: ' Phú Thọ' },
        { id: 17, name: ' Vĩnh Phúc' },
        { id: 18, name: ' Bắc Ninh' },
        { id: 19, name: ' Hải Dương' },
        { id: 20, name: ' Hải Phòng' },
        { id: 21, name: ' Hưng Yên' },
        { id: 22, name: ' Thái Bình' },
        { id: 23, name: ' Hà Nam' },
        { id: 24, name: ' Nam Định' },
        { id: 25, name: ' Ninh Bình' },
        { id: 26, name: ' Thanh Hóa' },
        { id: 27, name: ' Nghệ An' },
        { id: 28, name: ' Hà Tĩnh' },
        { id: 29, name: ' Quảng Bình' },
        { id: 30, name: ' Quảng Trị' },
        { id: 31, name: ' Thừa Thiên Huế' },
        { id: 32, name: ' Đà Nẵng' },
        { id: 33, name: ' Quảng Nam' },
        { id: 34, name: ' Quảng Ngãi' },
        { id: 35, name: ' Bình Định' },
        { id: 36, name: ' Phú Yên' },
        { id: 37, name: ' Khánh Hòa' },
        { id: 38, name: ' Ninh Thuận' },
        { id: 39, name: ' Bình Thuận' },
        { id: 40, name: ' Kon Tum' },
        { id: 41, name: ' Gia Lai' },
        { id: 42, name: ' Đắk Lắk' },
        { id: 43, name: ' Đắk Nông' },
        { id: 44, name: ' Lâm Đồng' },
        { id: 45, name: ' Bình Phước' },
        { id: 46, name: ' Tây Ninh' },
        { id: 47, name: ' Bình Dương' },
        { id: 48, name: ' Đồng Nai' },
        { id: 49, name: ' Bà Rịa - Vũng Tàu' },
        { id: 50, name: ' Hồ Chí Minh' },
        { id: 51, name: ' Long An' },
        { id: 52, name: ' Tiền Giang' },
        { id: 53, name: ' Bến Tre' },
        { id: 54, name: ' Trà Vinh' },
        { id: 55, name: ' Vĩnh Long' },
        { id: 56, name: ' Đồng Tháp' },
        { id: 57, name: ' An Giang' },
        { id: 58, name: ' Kiên Giang' },
        { id: 59, name: ' Cần Thơ' },
        { id: 60, name: ' Hậu Giang' },
        { id: 61, name: ' Sóc Trăng' },
        { id: 62, name: ' Bạc Liêu' },
        { id: 63, name: ' Cà Mau' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(14);

    const fetchPostion = async () => {
        let response = await fetchPositionToSearch();
        if (response && response && response.EC === 0) {
            setSearchResult(response.DT);
        }
        return;
    };

    useEffect(() => {
        fetchPostion();
    }, []);

    return (
        <section className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <TextSlider />
                <div className={cl('box-search')}>
                    <div className={cl('search-city')}>
                        <FontAwesomeIcon icon={faLocationDot} className={cl('location-icon')} />
                        <Select showInputSearch={true} listOption={listCity} className={cl('selection')} />
                    </div>

                    <div className={cl('search-job')}>
                        <input
                            type="text"
                            placeholder="Nhập từ khóa theo kỹ năng, chức vụ, công ty..."
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
                                        return (
                                            <SearchItem value={item} key={item.id} onClick={handleChooseSearchItem} />
                                        );
                                    })}
                            </PopperWrapper>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className={cl('search-button')}>
                        <Button onClick={() => navigate('/job')}>
                            <FontAwesomeIcon icon={faSearch} />
                            Tìm kiếm
                        </Button>
                    </div>
                </div>
                <div className={cl('suggestion-job')}>
                    <div className={cl('suggestion-job_title')}>Gợi ý cho bạn:</div>
                    <div className={cl('suggestion-job_tag')}>
                        <a href="" className={cl('itag')}>
                            Lập trình viên
                        </a>
                        <a href="" className={cl('itag')}>
                            Kỹ sư
                        </a>
                        <a href="" className={cl('itag')}>
                            Kế toán
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchJob;
