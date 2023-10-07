import classNames from 'classnames/bind';
import styles from './CompanyBenefit.module.scss';

const cl = classNames.bind(styles);

function CompanyBenefit() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <h2 className={cl('title')}>Tại sao bạn sẽ thích làm việc tại đây?</h2>
                <div className={cl('description')}></div>
            </div>
        </div>
    );
}

export default CompanyBenefit;
