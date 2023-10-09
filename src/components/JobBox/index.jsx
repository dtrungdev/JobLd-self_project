import classNames from 'classnames/bind';
import styles from './JobBox.module.scss';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import JobBoxItem from '../JobBoxItem';

const cl = classNames.bind(styles);

function JobBox() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('header')}>
                    <p>
                        Tìm thấy <span className={cl('strong-text')}>89</span> việc làm phù hợp với yêu cầu của bạn.
                    </p>
                    <Button className={cl('btn-filter')}>
                        <div className={cl('filter')}>
                            <FontAwesomeIcon icon={faFilter} />
                            Bộ lọc
                        </div>
                    </Button>
                </div>
                <div className={cl('row', 'main')}>
                    <div className={cl('col-lg-8')}>
                        <JobBoxItem />
                        <JobBoxItem />
                        <JobBoxItem />
                    </div>
                    <div className={cl('col-lg-4')}></div>
                </div>
            </div>
        </div>
    );
}

export default JobBox;
