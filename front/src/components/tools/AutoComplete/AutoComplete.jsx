import './autocomplete.css';
import { useEffect, useState, useRef } from "react";

export const AutoComplete = ({ options = [], labelKey = 'label', setData, style = {}, selectedId = null }) => {

    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const optionRefs = useRef([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.length > 0) {
            const filtered = options.filter(option => option[labelKey].toLowerCase().includes(value.toLowerCase()));
            setFilteredOptions(filtered);
            setIsOpen(true);
        } else {
            setFilteredOptions([]);
            setIsOpen(false);
        };
    };

    const handleSelect = (option) => {
        setInputValue(option[labelKey]);
        setIsOpen(false);
        setHighlightedIndex(-1);
        if (setData) setData(option);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            if (highlightedIndex < filteredOptions.length - 1) {
                setHighlightedIndex((prevIndex) => {
                    const nextIndex = prevIndex + 1;
                    optionRefs.current[nextIndex]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                    });
                    return nextIndex;
                });
            }
        } else if (e.key === 'ArrowUp') {
            if (highlightedIndex > 0) {
                setHighlightedIndex((prevIndex) => {
                    const prevIndexUpdated = prevIndex - 1;
                    optionRefs.current[prevIndexUpdated]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                    });
                    return prevIndexUpdated;
                });
            }
        } else if (e.key === 'Enter' && highlightedIndex !== -1) {
            handleSelect(filteredOptions[highlightedIndex]);
        } else if (e.key === 'Escape') setIsOpen(false);
    };

    const handleBlur = () => setTimeout(() => setIsOpen(false), 100);

    const handleClear = () => {
        setInputValue('');
        setFilteredOptions([]);
        setIsOpen(false);
        if (setData) setData(null);
    };

    const getOptionClass = (index) => index === highlightedIndex ? 'highlighted' : '';

    useEffect(() => {
        if (!isOpen) setHighlightedIndex(-1);
    }, [isOpen]);

    const handleFocus = () => {
        setFilteredOptions(options);
        setIsOpen(true);
    };

    useEffect(() => {
        if (!selectedId) {
            setInputValue('');
            return;
        };
        const selected = options.find(opt => opt._id === selectedId);
        if (selected) setInputValue(selected[labelKey]);
    }, [selectedId, options]);

    return (
        <div className="autocomplete" style={{ maxWidth: style.width || '280px' }}>
            <div className="autocomplete-input-wrapper">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    placeholder={style.placeholder || 'Buscar una opción'}
                    style={{ height: style.height || '40px' }}
                />
                {inputValue && (
                    <span className="clear-icon" onClick={handleClear}>
                        &#10005;
                    </span>
                )}
            </div>
            {isOpen && filteredOptions.length > 0 && (
                <ul className="autocomplete-list">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            ref={(el) => optionRefs.current[index] = el}
                            onClick={() => handleSelect(option)}
                            className={`autocomplete-item ${getOptionClass(index)}`}
                        >
                            {option[labelKey]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};