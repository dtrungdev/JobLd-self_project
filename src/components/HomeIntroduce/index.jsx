import { Button } from 'react-bootstrap';
import styles from './HomeIntroduce.module.scss';
import classNames from 'classnames/bind';
import job_search from '../../assets/images/homepage/job_search.svg';
import user_profile from '../../assets/images/homepage/user_profile.svg';
import blog from '../../assets/images/homepage/blog.svg';

const cl = classNames.bind(styles);

function HomeIntroduce() {
    return (
        <section className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('header')}>
                    <h2 className={cl('header-title')}>Công cụ tốt nhất cho hành trang ứng tuyển của bạn</h2>
                    <p className={cl('header-text')}>
                        Khẳng định bản thân qua hồ sơ "chất" với công cụ và kiến thức bổ ích từ JobLd.
                    </p>
                </div>
                <div className={cl('main', 'row')}>
                    <div className={cl('col-md-4')}>
                        <div className={cl('main-box')}>
                            <div className={cl('image-box')}>
                                <img src={job_search} alt="job_search" className={cl('img-homeintro')} />
                            </div>
                            <div className={cl('benefit-box')}>
                                <h2 className={cl('benefit-title')}>Tìm kiếm việc làm</h2>
                                <p className={cl('benefit-info')}>
                                    Danh sách việc làm "chất" liên tục cập nhật các lựa chọn mới nhất theo thị trường và
                                    xu hướng tìm kiếm.
                                </p>
                                <Button className={cl('benefit-btn')}>Khám phá</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cl('col-md-4')}>
                        <div className={cl('main-box')}>
                            <div className={cl('image-box')}>
                                <img src={user_profile} alt="job_search" className={cl('img-homeintro')} />
                            </div>
                            <div className={cl('benefit-box')}>
                                <h2 className={cl('benefit-title')}>Hồ sơ cá nhân</h2>
                                <p className={cl('benefit-info')}>
                                    Kiến tạo hồ sơ với bố cục chuẩn mực, chuyên nghiệp, được nhiều nhà tuyển dụng đề
                                    xuất.
                                </p>
                                <Button className={cl('benefit-btn')}>Khám phá</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cl('col-md-4')}>
                        <div className={cl('main-box')}>
                            <div className={cl('image-box')}>
                                <img src={blog} alt="job_search" className={cl('img-homeintro')} />
                            </div>
                            <div className={cl('benefit-box')}>
                                <h2 className={cl('benefit-title')}>Blog</h2>
                                <p className={cl('benefit-info')}>
                                    Đừng bỏ lỡ cơ hội cập nhật thông tin lương thưởng, chế độ làm việc, nghề nghiệp và
                                    kiến thức tất cả ngành nghề.
                                </p>
                                <Button className={cl('benefit-btn')}>Khám phá</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeIntroduce;
