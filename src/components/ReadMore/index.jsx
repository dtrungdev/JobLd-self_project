import classNames from 'classnames/bind';
import styles from './ReadMore.module.scss';
import { useState } from 'react';

const cl = classNames.bind(styles);

function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? '...read more' : ' show less'}
            </span>
        </p>
    );
}

export default ReadMore;
