import classNames from 'classnames/bind';
import styles from './SearchJob.module.scss';
import { useState, useEffect } from 'react';

const cl = classNames.bind(styles);

function TextSlider() {
    const arrText = [
        'Việc làm mới',
        'Công ty phù hợp',
        'Định hướng nghề nghiệp',
        'Phúc lợi tốt',
        'CV ấn tượng',
        'Kinh nghiệm mới',
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index > arrText.length - 1) {
            setIndex(0);
        }
        setTimeout(() => {
            setIndex(index + 1);
        }, 1800);
    }, [index]);

    return (
        <h2 className={cl('wellcome-text')}>
            <span className={cl('text-highlight')}>{arrText[index]}</span> dành cho bạn.
        </h2>
    );
}

export default TextSlider;
