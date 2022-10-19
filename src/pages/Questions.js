import React, { useState, useEffect } from "react";
import { Button, CircularProgress, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import useAxios from "../hooks/useAxios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../redux/actions";
import { decode } from "html-entities";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
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
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (response) {
            const question = response.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer);
            setOptions(answers);
        }
    }, [response, questionIndex]);

    if (loading) {
        return (
            <Box style={{ display: 'flex', justifyContent: 'center' }} mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    const handleAnswer = (e) => {
        const question = response.results[questionIndex];
        if (e.target.textContent === question.correct_answer) {
            dispatch(handleScoreChange(score + 1));
        }

        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            navigate('/score');
        }
    }

    return (
        <Box>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography item textAlign={"center"} variant="h4">
                    Question - {questionIndex + 1}
                </Typography>
                <div>
                    <Button variant="outlined">Score : {score} / {response.results.length}</Button>
                </div>
            </div>
            <br />
            <Divider />
            <Typography mt={5} mb={3}>
                {decode(response.results[questionIndex].question)}
            </Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id}>
                    <Button onClick={handleAnswer} variant="contained">{data}</Button>
                </Box>
            ))}
        </Box>
    )
}

export default Questions;