import { Card, CardHeader, CardContent, Button } from "@mui/material";
import SelectField from "../components/SelectField";
import { Box } from "@mui/system";

const Settings = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Card>
            <CardHeader sx={{ textAlign: "center" }} title="QUIZ App" />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <SelectField label="Category" />
                    <SelectField label="Difficulty" />
                    <SelectField label="Type" />
                    <Box mt={3} textAlign="center">
                        <Button variant="contained" type="submit">Get Started</Button>
                    </Box>
                </form>
            </CardContent>
        </Card>
    )
}

export default Settings;