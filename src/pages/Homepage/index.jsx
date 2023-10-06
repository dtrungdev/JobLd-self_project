import SearchJob from '../../components/SearchJob';
import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
import HomeIntroduce from '../../components/HomeIntroduce';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListJob from '../../components/ListJob';

const cl = classNames.bind(styles);
function HomePage() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <SearchJob />
                <ListJob />
                <HomeIntroduce />
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
