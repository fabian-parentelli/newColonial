import './checkBoxes.css';
import { useState } from 'react';

const CheckBoxes = ({
    labels, selecteds = [], multiSelect = false,
    direction = 'row', setType, boxColor = '#005F73', color = '#006073ec' }) => {

    const [selected, setSelected] = useState(selecteds);

    const handleCheckboxChange = (label) => {
        let newSelected;
        if (!multiSelect) newSelected = [label._id];
        else {
            newSelected = selected.includes(label._id)
                ? selected.filter(id => id !== label._id)
                : [...selected, label._id];
        };
        setSelected(newSelected);
        setType(!multiSelect ? newSelected[0] : newSelected);
    };

    return (
        <div className='checkBoxes' style={{ flexDirection: direction, color }}>
            {labels && labels.map(label => (
                <div className='checkBoxesDiv' key={label._id}>
                    <input
                        type="checkbox"
                        checked={selected.includes(label._id)}
                        onChange={() => handleCheckboxChange(label)}
                        style={{ accentColor: boxColor }}
                    />
                    <p>{label.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CheckBoxes;

// labels is an array of objects with name and _id