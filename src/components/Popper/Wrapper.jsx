import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import { useState, useEffect, useRef } from 'react';

const cl = classNames.bind(styles);

function Wrapper({ children, className }) {
    const ref = useRef(null);
    const [showPopper, setShowPopper] = useState(true);

    const handleClickOutside = () => {
        if (ref.current && !ref.current.contains(event.target)) {
            console.log(!ref.current.contains(event.target));
            setShowPopper(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return <>{showPopper && <div className={cl('wrapper', className)}>{children}</div>}</>;
}

export default Wrapper;
