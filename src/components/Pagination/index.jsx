import classnames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cl = classnames.bind(styles);
const Pagination = ({ currentPage, pageCount, onPageChange }) => {
    const handlePageChange = (page) => {
        if (onPageChange) {
            onPageChange(page);
        }
    };
    return (
        <>
            <span
                className={+currentPage <= 1 ? cl('btn-arrow--disable') : cl('btn-arrow')}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} className={cl('icon')} />
            </span>

            <span
                className={+currentPage >= pageCount ? cl('btn-arrow--disable') : cl('btn-arrow')}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                <FontAwesomeIcon icon={faChevronRight} className={cl('icon')} />
            </span>
        </>
    );
};

export default Pagination;
