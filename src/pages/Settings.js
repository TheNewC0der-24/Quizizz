import React from "react";
import { Card, CardHeader, CardContent, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../components/SelectField";
import { Box } from "@mui/system";
import TextField from "../components/TextField";
import useAxios from "../hooks/useAxios";

const Settings = () => {

    const { response, error, loading } = useAxios({ url: "/api_category.php" });

    if (loading) {
        return (
            <Box style={{ display: 'flex', justifyContent: 'center' }} mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Something went wrong !
            </Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True/False" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Card>
            <CardHeader sx={{ textAlign: "center" }} title="QUIZ App" />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <SelectField options={response.trivia_categories} label="Category" />
                    <SelectField options={difficultyOptions} label="Difficulty" />
                    <SelectField options={typeOptions} label="Type" />
                    <TextField />
                    <Box mt={3} textAlign="center">
                        <Button variant="contained" type="submit">Get Started</Button>
                    </Box>
                </form>
            </CardContent>
        </Card>
    )
}

export default Settings;