import SearchJob from '../../components/SearchJob';
import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import HomeIntroduce from '../../components/HomeIntroduce';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const cl = classNames.bind(styles);
function Home() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <SearchJob />
                <HomeIntroduce />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
