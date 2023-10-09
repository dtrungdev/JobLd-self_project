import classNames from 'classnames/bind';
import styles from './ReadMore.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className={cl('text')}>
            {isReadMore ? text.slice(0, 250) : text}

            <span onClick={toggleReadMore} className={cl('read-or-hide')}>
                {isReadMore ? 'Xem thêm' : 'Thu gọn'}{' '}
                <FontAwesomeIcon icon={isReadMore ? faChevronDown : faChevronUp} />
            </span>
        </p>
    );
}

export default ReadMore;
