import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Selection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { propTypes } from 'react-bootstrap/esm/Image';

const cl = classNames.bind(styles);

function Selection({
    placeholder,
    listOption,
    showInputSearch,
    className,
    classNameShowListOption,
    classNameLenghtOfDefaultText,
    classNameShowText,
    onChange,
    style,
}) {
    const ref = useRef(null);

    const [searchValue, setSearchValue] = useState('');

    const [isShowInputSearch, setIsShowInputSerch] = useState(showInputSearch);

    const [defaultTextSelect, setDefaultTextSelect] = useState(listOption[0].name);
    const [optionList, setOptionList] = useState(listOption);
    const [isShowOptionList, setIsShowOptionList] = useState(false);

    const handleClickOutside = () => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShowOptionList(false);
        }
    };

    const handleListDisplay = () => {
        setIsShowOptionList((preState) => !preState);
    };

    const handleOptionClick = (event) => {
        onChange(event);
        let optionSelected = event.target.getAttribute('value');
        setDefaultTextSelect(optionSelected);
        setIsShowOptionList(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref} className={cl('select', className)} style={style}>
            <div className={cl('show-text', classNameShowText)} onClick={handleListDisplay}>
                <span className={cl('text-render', classNameLenghtOfDefaultText)}>
                    {placeholder ? placeholder : defaultTextSelect}
                </span>
                <FontAwesomeIcon
                    icon={isShowOptionList === false ? faChevronDown : faChevronUp}
                    className={cl('icon-select')}
                />
            </div>
            {isShowOptionList && optionList && (
                <div className={cl('show-list-option', classNameShowListOption)}>
                    {isShowInputSearch === true ? (
                        <div className={cl('search-input')}>
                            <input
                                type="text"
                                className={cl('input-options')}
                                value={searchValue}
                                onChange={(event) => setSearchValue(event.target.value)}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                    <ul className={cl('list-options')}>
                        {!searchValue
                            ? optionList.map((option) => {
                                  return (
                                      <>
                                          <li
                                              key={option.id}
                                              value={option.name}
                                              onClick={handleOptionClick}
                                              className={
                                                  option.name == defaultTextSelect
                                                      ? cl('option', 'option-active')
                                                      : cl('option')
                                              }
                                          >
                                              {option.name}
                                          </li>
                                      </>
                                  );
                              })
                            : optionList
                                  .filter((obj) => {
                                      return obj.name
                                          .normalize('NFD')
                                          .replace(/[\u0300-\u036f]/g, '')
                                          .toLowerCase()
                                          .includes(
                                              searchValue
                                                  .normalize('NFD')
                                                  .replace(/[\u0300-\u036f]/g, '')
                                                  .toLowerCase(),
                                          );
                                  })
                                  .map((option) => {
                                      return (
                                          <>
                                              <li
                                                  key={option.id}
                                                  value={option.name}
                                                  onClick={handleOptionClick}
                                                  className={
                                                      option.name == defaultTextSelect
                                                          ? cl('option', 'option-active')
                                                          : cl('option')
                                                  }
                                              >
                                                  {option.name}
                                              </li>
                                          </>
                                      );
                                  })}
                    </ul>
                </div>
            )}
        </div>
    );
}

Selection.prototype = {
    defaultText: propTypes.string,
    listOption: propTypes.array,
    showInputSearch: propTypes.bool,
};
export default Selection;
