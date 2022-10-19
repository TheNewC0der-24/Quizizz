import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {

    const { score } = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBack = () => {
        dispatch(handleScoreChange(0)); // reset score
        dispatch(handleAmountChange(50)); // reset amount of questions
        navigate("/"); // go back to home page
    }

    return (
        <Box mt={30}>
            <Typography variant="h3" align="center" mb={3}>Final Score : {score}</Typography>
            <Box textAlign="center">
                <Button color="warning" variant="contained" onClick={handleBack}><ArrowBackIcon /> Back to Settings!</Button>
            </Box>
        </Box>
    )
}

export default FinalScreen;