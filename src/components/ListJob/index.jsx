import styles from './ListJob.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles);

function ListJob() {
    return (
        <section className={cl('wrapper')}>
            <div className={cl('content')}>
                <div className={cl('box-header')}>
                    <h2 className={cl('header-title')}>Việc làm tốt nhất</h2>
                    <div className={cl('header-tool')}></div>
                </div>
                <div className={cl('box-filter')}>
                    <div className={cl('filter-condition')}></div>
                    <div className={cl('smart-tag')}></div>
                </div>
                <div className={cl('box-job')}>
                    <div></div>
                </div>
            </div>
        </section>
    );
}

export default ListJob;
