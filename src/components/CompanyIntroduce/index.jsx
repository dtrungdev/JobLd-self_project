import classNames from 'classnames/bind';
import styles from './CompanyIntroduce.module.scss';

const cl = classNames.bind(styles);

function CompanyIntroduce() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <div className={cl('title')}>
                    <h2 className={cl('strong-text')}>Giới thiệu công ty</h2>
                </div>
                <div className={cl('description')}>
                    CÂU CHUYỆN ONE MOUNT One Mount Group được thành lập với tham vọng kiến tạo hệ sinh thái công nghệ
                    lớn nhất Việt Nam, cung cấp các giải pháp và dịch vụ xuyên suốt chuỗi giá trị, từ lĩnh vực dịch vụ
                    tài chính, phân phối, bất động sản và bán lẻ. Bắt đầu với VinShop, ứng dụng bán lẻ chuyên dụng giúp
                    các chủ tiệm tạp hoá độc lập phát triển cửa hàng của họ thông qua công nghệ hỗ trợ quản lý chuỗi
                    cung ứng và hàng tồn kho. VinID, siêu ứng dụng và hệ thống quản lý khách hàng thân thiết lớn nhất
                    Việt Nam tích hợp nhiều chức năng như thanh toán, quản lý nhà ở, mua hàng, dịch vụ tài chính. Và
                    OneHousing, nền tảng toàn diện cho mọi nhu cầu về nhà ở, hỗ trợ mua bán, đầu tư và các dịch vụ khác
                    liên quan đến bất động sản. TRẢI NGHIỆM CÙNG NHAU VƯƠN TỚI ĐỈNH CAO Với sứ mệnh tạo ra hệ sinh thái
                    công nghệ lớn nhất Việt Nam, kết nối con người và doanh nghiệp tại nơi giao thoa giữa công nghệ và
                    nhân văn, One Mount đang là nơi quy tụ của hơn 1.500 nhân sự xuất sắc toàn cầu. Tập đoàn hiện đang
                    là điểm đến của đội ngũ nhân tài người Việt từng đảm nhận các vai trò lãnh đạo tại các tập đoàn đa
                    quốc gia trên thế giới, chung tầm nhìn "chất xám Việt" trở về xây dựng đất nước. Sự đa dạng trong
                    nhóm tuổi, quốc tịch, kinh nghiệm làm việc, phong cách cá nhân của hơn 1.500 thành viên góp phần tạo
                    nên môi trường làm việc đa văn hóa và năng động tại One Mount, là nguồn cảm hứng cho những sáng kiến
                    bứt phá không giới hạn, khuyến khích sự tìm tòi, khám phá và không ngừng phát triển kỹ năng cá nhân.
                    One Mount tham vọng xây dựng cộng đồng nhân tài toàn cầu tại Việt Nam - nơi mỗi thành viên đều được
                    làm việc, học hỏi và truyền cảm hứng từ những người giỏi nhất.
                </div>
            </div>
        </div>
    );
}

export default CompanyIntroduce;
