import HeaderRecruiterPage from '../../components/HeaderRecruiterPage';
import classNames from 'classnames/bind';
import styles from './RecruiterPage.module.scss';

const cl = classNames.bind(styles);

function RecruiterPage() {
    return (
        <>
            <HeaderRecruiterPage />
            <div className={cl('wrapper')}>
                <div className={cl('content')}></div>
            </div>
        </>
    );
}

export default RecruiterPage;
