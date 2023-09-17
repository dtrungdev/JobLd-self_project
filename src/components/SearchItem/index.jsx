import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';

const cl = classNames.bind(styles);
function SearchItem() {
    return <div className={cl('wrapper')}>Lập trình viên</div>;
}

export default SearchItem;
