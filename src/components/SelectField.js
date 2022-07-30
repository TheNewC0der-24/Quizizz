import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const SelectField = props => {
    const { label } = props;
    const [value, setValue] = useState("");

    const handleChange = () => {

    }
    return (
        <Box mt={2}>
            <FormControl size='small' fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    <MenuItem>Option1</MenuItem>
                    <MenuItem>Option2</MenuItem>
                    <MenuItem>Option3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField;