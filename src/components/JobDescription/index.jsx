import classNames from 'classnames/bind';
import styles from './JobDescription.module.scss';

const cl = classNames.bind(styles);
function JobDescription() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <div className={cl('job-overview')}>
                    <div className={cl('photo')}></div>
                    <div className={cl('d-flex', 'flex-column', 'gap-2')}>
                        <div className={cl('d-inline-block')}>
                            3rd Floor, Rivera Park Building, 7/28 Thanh Thai, District 10, Ho Chi Minh{' '}
                        </div>
                        <div className={cl('d-inline-block')}></div>
                        <div className={cl('d-inline-block')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;
