import classNames from 'classnames/bind';
import styles from './JobLookUp.module.scss';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot, faBuilding } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);
function JobLookUp() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('box-search')}>
                    <div className={cl('search-city')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <Form.Select size="lg">
                            <option>Tất cả thành phố</option>
                            <option>Hà Nội</option>
                            <option>Hồ Chí Minh</option>
                        </Form.Select>
                    </div>
                    <div className={cl('search-city')}>
                        <FontAwesomeIcon icon={faBuilding} />
                        <Form.Select size="lg">
                            <option>Tất cả lĩnh vực</option>
                            <option>Hà Nội</option>
                            <option>Hồ Chí Minh</option>
                        </Form.Select>
                    </div>

                    <div className={cl('search-job')}>
                        <input type="text" placeholder="Nhập từ khóa theo kỹ năng, chức vụ, công ty..." />
                    </div>

                    <div className={cl('search-button')}>
                        <Button>
                            <FontAwesomeIcon icon={faSearch} />
                            Tìm kiếm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobLookUp;
