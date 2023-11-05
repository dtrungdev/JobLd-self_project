import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { useNavigate } from 'react-router-dom';

const cl = classNames.bind(styles);
function SearchItem({ value, onClick }) {
    const navigate = useNavigate();

    const handleChooseSearchValue = () => {
        // navigate('/find-job');
    };

    return (
        <div className={cl('wrapper')} onClick={onClick}>
            {value.name}
        </div>
    );
}

export default SearchItem;
