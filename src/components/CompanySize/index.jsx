import classNames from 'classnames/bind';
import styles from './CompanySize.module.scss';

const cl = classNames.bind(styles);
function CompanySize() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <h2 className={cl('title')}>Thông tin chung</h2>
                <div className={cl('row', 'box')}>
                    <div className={cl('d-flex', 'col-md-4', 'flex-md-column', 'justify-content-between', 'border')}>
                        <div className={cl('gray-text')}>Mô hình công ty</div>
                        <div className={cl('normal-text')}>Sản phẩm</div>
                    </div>
                    <div className={cl('d-flex', 'col-md-4', 'flex-md-column', 'justify-content-between', 'border')}>
                        <div className={cl('gray-text')}>Quy Mô công ty</div>
                        <div className={cl('normal-text')}>10 nhân viên</div>
                    </div>
                    <div className={cl('d-flex', 'col-md-4', 'flex-md-column', 'justify-content-between', 'border')}>
                        <div className={cl('gray-text')}>Thời gian làm việc</div>
                        <div className={cl('normal-text')}>Thứ 2 - Thứ 6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanySize;
