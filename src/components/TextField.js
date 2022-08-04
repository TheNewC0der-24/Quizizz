import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TextFieldComp = () => {

    const handleChange = () => {

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