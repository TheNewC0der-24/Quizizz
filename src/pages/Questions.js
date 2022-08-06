import React from "react";
import { Button, Typography } from "@mui/material";
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
    console.log(amount_of_question);


    let apiUrl = `/api.php?amount=10`

    const { response, loading } = useAxios({ url: apiUrl })


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