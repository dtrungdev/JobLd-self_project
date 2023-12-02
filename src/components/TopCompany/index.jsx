import classNames from 'classnames/bind';
import styles from './TopCompany.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cl = classNames.bind(styles);
function TopCompany() {
    const sliderCompany = useRef(null);
    const slider = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [transformSlider, setTransformSlider] = useState(0);

    const DataSlide = [
        {
            id: 1,
            urlImg: 'https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 2,
            urlImg: 'https://static.topcv.vn/company_logos/f2b3941156aa266e4b3b2b3c8f15e8b0-6087dbfd32874.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 3,
            urlImg: 'https://static.topcv.vn/company_logos/9daL3bdIkSndOca8CWgxSBaopx4IRBBJ_1647229344____c0b5dafa7f14922683309d61bb3c9df6.png',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 4,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-nhua-long-thanh-5e6a047c1bebe.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 5,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-co-phan-thanh-toan-dien-tu-vnpt-611b6f9e4aca7.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 6,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-duoc-pham-tan-an-6259386221421.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 7,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-thuong-mai-ky-thuat-vms-6237dc10d72d1.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 8,
            urlImg: 'https://static.topcv.vn/company_logos/vien-son-computer-technology-company-limited-6006928d9e539.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },

        {
            id: 11,
            urlImg: 'https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 12,
            urlImg: 'https://static.topcv.vn/company_logos/f2b3941156aa266e4b3b2b3c8f15e8b0-6087dbfd32874.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 13,
            urlImg: 'https://static.topcv.vn/company_logos/9daL3bdIkSndOca8CWgxSBaopx4IRBBJ_1647229344____c0b5dafa7f14922683309d61bb3c9df6.png',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 14,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-nhua-long-thanh-5e6a047c1bebe.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 15,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-co-phan-thanh-toan-dien-tu-vnpt-611b6f9e4aca7.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 16,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-duoc-pham-tan-an-6259386221421.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 17,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-thuong-mai-ky-thuat-vms-6237dc10d72d1.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 18,
            urlImg: 'https://static.topcv.vn/company_logos/vien-son-computer-technology-company-limited-6006928d9e539.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },

        {
            id: 21,
            urlImg: 'https://static.topcv.vn/company_logos/XITow2ZxRB7kEpgtiAmUCdhcuiPUNpQc_1675737258____ede23242fc183139dd15f0ebaa37d22f.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 22,
            urlImg: 'https://static.topcv.vn/company_logos/f2b3941156aa266e4b3b2b3c8f15e8b0-6087dbfd32874.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 23,
            urlImg: 'https://static.topcv.vn/company_logos/9daL3bdIkSndOca8CWgxSBaopx4IRBBJ_1647229344____c0b5dafa7f14922683309d61bb3c9df6.png',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 24,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-nhua-long-thanh-5e6a047c1bebe.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 25,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-co-phan-thanh-toan-dien-tu-vnpt-611b6f9e4aca7.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 26,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-duoc-pham-tan-an-6259386221421.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 27,
            urlImg: 'https://static.topcv.vn/company_logos/cong-ty-tnhh-thuong-mai-ky-thuat-vms-6237dc10d72d1.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
        {
            id: 28,
            urlImg: 'https://static.topcv.vn/company_logos/vien-son-computer-technology-company-limited-6006928d9e539.jpg',
            name: 'Công ty cổ phần phát triển và đầu tư Vạn Thịnh Hưng',
        },
    ];

    const lenght = DataSlide.length;

    useEffect(() => {
        setIsLoading(false);
        const loop = setInterval(handleNextBtn, 4000);
        return () => {
            clearInterval(loop);
        };
    }, [transformSlider]);

    const handlePreviousBtn = () => {};
    const handleNextBtn = () => {
        let step = -sliderCompany.current.offsetWidth - 16;
        if (transformSlider > -slider.current.offsetWidth + 2 * (sliderCompany.current.offsetWidth + 16)) {
            setTransformSlider(transformSlider + step);
        } else {
            setTransformSlider(0);
        }
    };

    const style = {
        width: `${isLoading === false && (sliderCompany.current.offsetWidth - 16 * 4) / 4}px`,
    };

    const styleSlider = {
        width: `${isLoading === false && ((sliderCompany.current.offsetWidth - 16 * 4) / 4) * (lenght + lenght / 8)}px`,
        transform: `translate3d(${transformSlider}px, 0px, 0px)`,
        transition: `all 1s ease 0s`,
    };

    return (
        <section className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('top-company_header')}>
                    <h2 id="id" className={cl('top-company_title')}>
                        Top Công ty hàng đầu
                    </h2>
                    <span className={cl('slider-btn')}>
                        <div className={cl('direct-page')}>
                            <FontAwesomeIcon icon={faChevronLeft} onClick={handlePreviousBtn} />
                        </div>
                        <div className={cl('direct-page')}>
                            <FontAwesomeIcon icon={faChevronRight} onClick={handleNextBtn} />
                        </div>
                    </span>
                </div>
                <div ref={sliderCompany} className={cl('top-company_box')}>
                    <div ref={slider} className={cl('top-company_slider')} style={styleSlider}>
                        {isLoading === false ? (
                            <>
                                {DataSlide.map((slide, index) => {
                                    return (
                                        <div key={slide.id} className={cl('top-company_item')} style={style}>
                                            <div className={cl('frame-img')}>
                                                <img src={slide.urlImg} alt="" className={cl('company-img')} />
                                            </div>
                                            <h3 className={cl('company-name')}>{slide.name}</h3>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopCompany;
