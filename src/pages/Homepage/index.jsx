import SearchJob from '../../components/SearchJob';
import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import HomeIntroduce from '../../components/HomeIntroduce';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListJob from '../../components/ListJob';
import TopCompany from '../../components/TopCompany';

const cl = classNames.bind(styles);
function HomePage() {
    return (
        <>
            <Header />
            <div className={cl('wrapper')}>
                <div className={cl('content')}>
                    <SearchJob />
                    <ListJob />
                    <TopCompany />
                    <HomeIntroduce />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default HomePage;
