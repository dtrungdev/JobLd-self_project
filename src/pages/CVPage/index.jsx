import classNames from 'classnames/bind';
import styles from './CVPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function CVPage() {
    return (
        <div className={cl('container')}>
            <h2 className={cl('text')}>
                Xin lỗi quý khách! <br></br> <br />
                <p>Tính năng này đang được phát triển...</p>
            </h2>

            <div className={cl('div')}>
                <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
    );
}

export default CVPage;
