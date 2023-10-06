import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';
import styles from './ListJob.module.scss';
import classNames from 'classnames/bind';
import { faChevronLeft, faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons';
import ListJobItem from './ListJobItem';

const cl = classNames.bind(styles);

function ListJob() {
    return (
        <section className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('box-header')}>
                    <h2 className={cl('header-title')}>Việc làm tốt nhất</h2>
                    <div className={cl('header-tool')}>
                        <span className={cl('see-more')}>Xem tất cả</span>
                        <span className={cl('direct-page')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                        <span className={cl('direct-page')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </div>
                </div>
                <div className={cl('box-filter')}>
                    <div className={cl('filter-condition')}>
                        <div className={cl('input-group-text')}>
                            <FontAwesomeIcon icon={faFilter} />
                            <span>Lọc theo:</span>
                        </div>
                        <Form.Select size="lg">
                            <option>Địa điểm</option>
                            <option>Mức lương</option>
                            <option>Kinh nghiệm</option>
                            <option>Ngành nghề</option>
                        </Form.Select>
                    </div>
                    <div className={cl('smart-tag')}>
                        <div className={cl('direct-page')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className={cl('box-tag')}>
                            <div className={cl('box-tag_item', 'active')}>Ngẫu nhiên</div>
                            <div className={cl('box-tag_item')}>Hà Nội</div>
                            <div className={cl('box-tag_item')}>Thành phố Hồ Chí Minh</div>
                            <div className={cl('box-tag_item')}>Miền Bắc</div>
                            <div className={cl('box-tag_item')}>Miền Nam</div>
                        </div>
                        <div className={cl('direct-page')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </div>
                <div className={cl('box-job')}>
                    <div className={cl('box-job_slider')}>
                        <div className={cl('list-job')}>
                            <div className={cl('list-job_content', 'row')}>
                                <ListJobItem />
                                <ListJobItem />
                                <ListJobItem />
                                <ListJobItem />
                                <ListJobItem />
                                <ListJobItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListJob;
