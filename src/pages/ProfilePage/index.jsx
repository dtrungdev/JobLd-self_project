import classNames from 'classnames/bind';
import styles from './ProfilePage.module.scss';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import ProfileAddingInfo from '../../components/ProfileAddingInfo';
import { useState, useRef } from 'react';

const cl = classNames.bind(styles);

function ProfilePage() {
    const [file, setFile] = useState();
    const [viewFile, setViewFile] = useState();
    const inputUploadRef = useRef(null);
    const [showFileUploaded, setShowFileUploaded] = useState({ show: false, messege: '' });

    const handleUploadCV = (event) => {
        let selectedFile = event.target.files[0];
        if (selectedFile) {
            let objUrl = URL.createObjectURL(selectedFile);
            console.log(objUrl);
            setViewFile(objUrl);
        } else {
            console.log('select your file');
        }
    };
    return (
        <>
            <Header />
            <div className={cl('wrapper')}>
                <div className={cl('content', 'container')}>
                    <div className={cl('main', 'row')}>
                        <div className={cl('col-lg-4')}>
                            <div className={cl('info-card')}>
                                <h3 className={cl('info-card_title')}>Quản lý CV</h3>
                                <div className={cl('suggestion')}>
                                    Tải CV của bạn bên dưới để có thể sử dụng xuyên suốt quá trình tìm việc
                                </div>
                                <div className={cl('cv-manager')}>
                                    <div className={cl('')}>
                                        <div className={cl('cv-upload')}>
                                            <button className={cl('btn-upload-cv')}>
                                                <FontAwesomeIcon icon={faUpload} />
                                                Tải CV lên
                                                <input
                                                    type="file"
                                                    ref={inputUploadRef}
                                                    name="myfile"
                                                    onChange={handleUploadCV}
                                                />
                                            </button>
                                            {showFileUploaded.show && <p className={cl('file-uploaded')}></p>}
                                            <iframe src={viewFile} className={cl('review-file')}></iframe>
                                            <p>
                                                (Sử dụng tệp .pdf hoặc định dạng ảnh (.img, .png, .jpg,...) không chứa
                                                mật khẩu bảo vệ và dưới 3MB)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cl('information', 'col-lg-8')}>
                            <ProfileAddingInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
