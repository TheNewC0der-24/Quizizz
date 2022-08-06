import React from 'react';
import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';

const TextFieldComp = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    }

    return (
        <Box mt={2}>
            <FormControl fullWidth>
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="No. of Questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>
    )
}

export default TextFieldComp;