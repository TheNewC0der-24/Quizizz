import React from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";

const Questions = () => {

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question
    } = useSelector(state => state);

    let apiUrl = `/api.php?amount=${amount_of_question}`;
    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`);
    }

    const { response, loading } = useAxios({ url: apiUrl })

    if (loading) {
        return (
            <Box style={{ display: 'flex', justifyContent: 'center' }} mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Box>
            <Typography textAlign={"center"} variant="h4">
                Questions
            </Typography>
            <Typography mt={5}>
                This is the questions page.
            </Typography>
            <Box mt={2}>
                <Button variant="contained">Answer 1</Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained">Answer 2</Button>
            </Box>
            <Box mt={5}>
                <Button>Score: 2/6</Button>
            </Box>
        </Box>
    )
}

export default Questions;