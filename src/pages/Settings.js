import React from "react";
import { Divider, Card, CardHeader, CardContent, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../components/SelectField";
import { Box } from "@mui/system";
import TextField from "../components/TextField";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';

const Settings = () => {

    const { response, error, loading } = useAxios({ url: "/api_category.php" });

    const navigate = useNavigate();

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
        navigate("/questions");
    }

    return (
        <Card style={{ borderTop: "5px solid #1976d2" }}>
            <Typography variant="h4" textAlign="center" mt={3} mb={3}>QUIZ App</Typography>
            <Divider />
            <CardContent>
                <Button mb={5} variant="outlined" style={{ display: "flex", justifyContent: "end", marginLeft: "auto" }}><SettingsIcon className="setting-icon" /> Settings</Button>
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