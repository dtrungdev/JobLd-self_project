import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';
import Tippy from '@tippyjs/react/headless';
import styles from './SearchJob.module.scss';
import classNames from 'classnames/bind';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../Popper';
import SearchItem from '../SearchItem';

const cl = classNames.bind(styles);

function SearchJob() {
    const [searchResult, setSearchResult] = useState([]);
    const arrText = ['Việc làm mới', 'Công ty phù hợp', 'Định hướng nghề nghiệp', 'Phúc lợi tốt', 'CV ấn tượng'];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index > arrText.length - 1) {
            setIndex(0);
        }
        setTimeout(() => {
            setIndex(index + 1);
        }, 1800);
    }, [index]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <section className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <h2 className={cl('wellcome-text')}>
                    <span className={cl('text-highlight')}>{arrText[index]}</span> dành cho bạn.
                </h2>
                <div className={cl('box-search')}>
                    <div className={cl('search-city')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <Form.Select size="lg">
                            <option>Tất cả thành phố</option>
                            <option>Hà Nội</option>
                            <option>Hồ Chí Minh</option>
                        </Form.Select>
                    </div>
                    <Tippy
                        placement="bottom"
                        interactive
                        render={(attrs) => (
                            <div className={cl('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                    <SearchItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cl('search-job')}>
                            <input type="text" placeholder="Nhập từ khóa theo kỹ năng, chức vụ, công ty..." />
                        </div>
                    </Tippy>

                    <div className={cl('search-button')}>
                        <Button>
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
