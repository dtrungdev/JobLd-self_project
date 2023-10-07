import classNames from 'classnames/bind';
import styles from './CompanyList.module.scss';
import CompanyListItem from './CompanyListItem';

const cl = classNames.bind(styles);
function CompanyList() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <h2 className={cl('main-title')}>Danh sách công ty</h2>
                <div className={cl('row')}>
                    <CompanyListItem />
                    <CompanyListItem />
                    <CompanyListItem />
                </div>
            </div>
        </div>
    );
}

export default CompanyList;
