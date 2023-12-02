import classNames from 'classnames/bind';
import styles from './CampaignRecruit.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Editor from '../TextEditor';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    faAlignLeft,
    faBriefcase,
    faCircleInfo,
    faImage,
    faLocationDot,
    faPen,
    faPlus,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import Selection from '../Selection';
import { Button } from 'react-bootstrap';

const cl = classNames.bind(styles);

function CampaignRecruit() {
    const text = useRef(null);
    const [textHeight, setTextHeight] = useState();
    const [textContent, setTextContent] = useState('');

    const [startDate, setStartDate] = useState(new Date());

    const listGender = [
        { id: 1, name: 'nam' },
        { id: 2, name: 'nữ' },
    ];

    const handleChangeText = (event) => {
        setTextHeight(event.target.scrollHeight);
        if (event.target.value == '') {
            setTextHeight(27);
        }
    };
    return (
        <div className={cl('content')}>
            <div className={cl('menu-action')}>
                <div className={cl('menu-action_item')}>
                    <span className={cl('decor-number')}>1</span>Thông tin đăng tuyển chi tiết
                </div>
                <div className={cl('menu-action_item')}>
                    <span className={cl('decor-number')}>2</span>Test đầu vào
                </div>
            </div>
            <div className={cl('container-mini')}>
                <div className={cl('content-mini')}>
                    <div className={cl('d-flex', 'flex-column')}>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Tiêu đề tin tuyển dụng</h3>
                            <textarea
                                ref={text}
                                className={cl('text')}
                                style={{ height: `${textHeight}px` }}
                                onChange={handleChangeText}
                            ></textarea>
                            <FontAwesomeIcon icon={faPen} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Ngành Nghề và lĩnh vực</h3>
                            <div className={cl('d-flex', 'gapping')}>
                                <div className={cl('form-group')}>
                                    <label className={cl('label')}>Ngành nghề chính</label>
                                    <Selection
                                        placeholder={'Lựa chọn 1 ngành nghề chính cho tin tuyển dụng'}
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>

                                <div className={cl('form-group')}>
                                    <label className={cl('label')}>Ngành nghề phụ</label>
                                    <Selection
                                        placeholder={'Lựa chọn 1 ngành nghề phụ cho tin tuyển dụng'}
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faFolder} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Thông tin chung</h3>
                            <div className={cl('d-flex', 'gapping')}>
                                <div className={cl('form-group')}>
                                    <label htmlFor="" className={cl('label')}>
                                        Số lượng tuyển
                                    </label>
                                    <input type="text" placeholder="Nhập số lượng" className={cl('input-group')} />
                                </div>
                                <div className={cl('form-group')}>
                                    <label className={cl('label')}>
                                        Loại công việc <FontAwesomeIcon icon={faCircleQuestion} />
                                    </label>
                                    <Selection
                                        placeholder={'--Chọn loại công việc--'}
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                                <div></div>
                            </div>
                            <div className={cl('d-flex', 'gapping')}>
                                <div className={cl('form-group')}>
                                    <label className={cl('label')}>Giới tính</label>
                                    <Selection
                                        placeholder={'--Chọn giới tính--'}
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                                <div className={cl('form-group')}>
                                    <label className={cl('label')}>Cấp bậc</label>
                                    <Selection
                                        placeholder={'--Chọn cấp bậc--'}
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                                <div className={cl('form-group')}>
                                    <label className={cl('label')}>Kinh nghiệm</label>
                                    <Selection
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                            </div>
                            <div style={{ height: '40px' }}></div>
                            <div className={cl('d-flex', 'gapping', 'position-r')}>
                                <div className={cl('split-component')}>Mức lương</div>
                                <div className={cl('form-group')}>
                                    <label className={cl('label-strong')}>Loại tiền tệ</label>
                                    <Selection
                                        placeholder={'--Chọn loại tiền tệ--'}
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                                <div className={cl('form-group')}>
                                    <label className={cl('label-strong')}>Kiểu lương</label>
                                    <Selection
                                        placeholder={'--Chọn kiểu lương--'}
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                                <div className={cl('form-group')}>
                                    <label className={cl('label-strong')}>Từ</label>
                                    <Selection
                                        showInputSearch={false}
                                        listOption={listGender}
                                        className={cl('select')}
                                        classNameShowListOption={cl('list-option')}
                                    />
                                </div>
                            </div>
                            <div style={{ height: '40px' }}></div>
                            <div className={cl('d-flex', 'position-r')}>
                                <div className={cl('split-component')}>Khu vực làm việc</div>
                                <div
                                    style={{
                                        backgroundColor: ' #f3f5f7',
                                        marginTop: '20px',
                                        width: '100%',
                                        padding: '0 16px',
                                    }}
                                >
                                    <div className={cl('form-group', 'd-flex', 'align-items-center')}>
                                        <label className={cl('label-horizontal')}>
                                            <FontAwesomeIcon icon={faLocationDot} /> Khu vực 1:
                                        </label>
                                        <Selection
                                            placeholder={'--Chọn tỉnh/thành phố--'}
                                            showInputSearch={false}
                                            listOption={listGender}
                                            className={cl('select')}
                                            classNameShowListOption={cl('list-option')}
                                            style={{ marginRight: '50%' }}
                                        />
                                    </div>
                                    <div className={cl('form-group', 'd-flex', 'gap-4')}>
                                        <Selection
                                            placeholder={'--Chọn quận/huyện--'}
                                            showInputSearch={false}
                                            listOption={listGender}
                                            className={cl('select')}
                                            classNameShowListOption={cl('list-option')}
                                            style={{ maxWidth: '300px' }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Nhập địa chỉ cụ thể (số nhà, đường, phường)"
                                            className={cl('input-group')}
                                        />
                                    </div>
                                    <div className={cl('add-address')}>
                                        <FontAwesomeIcon icon={faPlus} /> Thêm địa chỉ
                                    </div>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faCircleInfo} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>
                                Lý do nên ứng tuyển (Đề xuất dành cho nhà tuyển dụng)
                            </h3>
                            <p>
                                (Thêm lý do ứng tuyển có thể giúp nhà tuyển dụng gây ấn tượng với ứng viên và tăng cơ
                                hội thu hút ứng viên phù hợp)
                            </p>
                            <div className={cl('d-flex', 'mb-4')}>
                                <span className={cl('benefit')}>Lý do 1:</span>
                                <textarea
                                    ref={text}
                                    className={cl('text')}
                                    style={{ height: `${textHeight}px` }}
                                    onChange={handleChangeText}
                                ></textarea>
                            </div>
                            <div className={cl('d-flex', 'mb-4')}>
                                <span className={cl('benefit')}>Lý do 2:</span>
                                <textarea
                                    ref={text}
                                    className={cl('text')}
                                    style={{ height: `${textHeight}px` }}
                                    onChange={handleChangeText}
                                ></textarea>
                            </div>
                            <div className={cl('d-flex')}>
                                <span className={cl('benefit')}>Lý do 3:</span>
                                <textarea
                                    ref={text}
                                    className={cl('text')}
                                    style={{ height: `${textHeight}px` }}
                                    onChange={handleChangeText}
                                ></textarea>
                            </div>

                            <FontAwesomeIcon icon={faThumbsUp} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Nội dung tuyển dụng chi tiết</h3>
                            <div style={{ height: '20px' }}></div>
                            <div className={cl('d-flex', 'position-r')}>
                                <div className={cl('split-component')}>Mô tả công việc</div>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Editor
                                        text={textContent}
                                        onChange={(event) => setTextContent(event.target.value)}
                                        placeholder="Nhập nội dung mô tả công việc"
                                    />
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faAlignLeft} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Yêu cầu ứng viên</h3>
                            <div style={{ height: '20px' }}></div>
                            <div className={cl('d-flex', 'position-r')}>
                                <div className={cl('split-component')}>Mô tả yêu cầu ứng viên</div>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Editor
                                        text={textContent}
                                        onChange={(event) => setTextContent(event.target.value)}
                                        placeholder="Nhập nội dung yêu cầu ứng viên"
                                    />
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faAlignLeft} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Quyền lợi ứng viên</h3>
                            <div style={{ height: '20px' }}></div>
                            <div className={cl('d-flex', 'position-r')}>
                                <div className={cl('split-component')}>Mô tả quyền lợi ứng viên</div>
                                <div style={{ marginTop: '20px', width: '100%' }}>
                                    <Editor
                                        text={textContent}
                                        onChange={(event) => setTextContent(event.target.value)}
                                        placeholder="Nhập nội dung mô tả quyền lợi ứng viên"
                                    />
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faAlignLeft} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Thông tin nhận CV</h3>
                            <div style={{ height: '20px' }}></div>
                            <div className={cl('d-flex', 'position-r')}>
                                <div className={cl('split-component')}>Hạn chót nhận CV</div>
                                <div style={{ marginTop: '20px' }}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => {
                                            setStartDate(date);
                                        }}
                                        dateFormat="dd/MM/yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        className={cl('input-group')}
                                    />
                                </div>
                            </div>
                            <div style={{ height: '40px' }}></div>

                            <div className={cl('d-flex', 'gapping', 'position-r')}>
                                <div className={cl('split-component')}>Hạn chót nhận CV</div>
                                <div className={cl('form-group')}>
                                    <label htmlFor="" className={cl('label-strong')}>
                                        Họ và tên
                                    </label>
                                    <input type="text" placeholder="Họ và tên" className={cl('input-group')} />
                                </div>
                                <div className={cl('form-group')}>
                                    <label htmlFor="" className={cl('label-strong')}>
                                        Số điện thoại
                                    </label>
                                    <input type="text" placeholder="0xxxxxxxxx" className={cl('input-group')} />
                                </div>
                                <div className={cl('form-group')} style={{ flex: '2' }}>
                                    <label htmlFor="" className={cl('label-strong')}>
                                        Email
                                    </label>
                                    <input type="text" placeholder="___@" className={cl('input-group')} />
                                </div>
                            </div>

                            <FontAwesomeIcon icon={faBriefcase} className={cl('component-icon')} />
                        </div>

                        <div className={cl('component')}>
                            <h3 className={cl('component-title')}>Hình ảnh và video nổi bật</h3>
                            <p>Bổ sung hình ảnh/video sẽ giúp công ty hiển thị được chuyên nghiệp hơn</p>

                            <FontAwesomeIcon icon={faImage} className={cl('component-icon')} />
                        </div>
                        <div className={cl('component-footer')}>
                            <Button className={cl('btn-discard')}>Hủy</Button>
                            <Button className={cl('btn-complete')}>Hoàn tất</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignRecruit;
