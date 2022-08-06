import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleCategoryChange } from '../redux/actions';

const SelectField = props => {
    const { label, options } = props;
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
        switch (label) {
            case "Category":
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value));
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;
            case "Amount":
                dispatch(handleAmountChange(e.target.value));
                break;
            case "Score":
                dispatch(handleScoreChange(e.target.value));
                break;
            default:
                return;
        }
    }
    return (
        <Box mt={2}>
            <FormControl size='small' fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField;