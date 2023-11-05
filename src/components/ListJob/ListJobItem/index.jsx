import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListJobItem.module.scss';
import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const cl = classNames.bind(styles);

function ListJobItem({ data }) {
    console.log(data);
    return (
        <div className={cl('wrapper', 'col-lg-4', 'col-sm-6')}>
            <div className={cl('list-job_item')}>
                <div className={cl('header')}>
                    <div className={cl('avatar')}>
                        <div className={cl('company-logo')}>
                            <img src={data.Company.logo} alt="" className={cl('img-responsive')} />
                        </div>
                    </div>
                    <div className={cl('col-title', 'text-ellipsis')}>
                        <h3>
                            <a href="" className={cl('job-title', 'text-ellipsis')}>
                                {data.title}
                            </a>
                        </h3>
                        <a href="" className={cl('job-descript', 'text-ellipsis')}>
                            {data.Company.name}
                        </a>
                    </div>
                </div>
                <div className={cl('footer')}>
                    <div className={cl('col-job-info')}>
                        <div className={cl('salary')}>
                            <span className={cl('text-ellipsis')}>{data.salary} triệu</span>
                        </div>
                        <div className={cl('address')}>
                            {data.Locations && data.Locations.length < 0 ? (
                                <span className={cl('text-ellipsis')}></span>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className={cl('col-like')}>
                        <button className={cl('save-job', 'btn')}>
                            <FontAwesomeIcon icon={faHeart} className={cl('icon')} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListJobItem;
