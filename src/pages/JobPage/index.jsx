import classNames from 'classnames/bind';
import styles from './JobPage.module.scss';
import Header from '../../components/Header';
import JobLookUp from '../../components/JobLookUp';
import JobBox from '../../components/JobBox';

const cl = classNames.bind(styles);

function JobPage() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <JobLookUp />
                <JobBox />
            </div>
        </div>
    );
}

export default JobPage;
