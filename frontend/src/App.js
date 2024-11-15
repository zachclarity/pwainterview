// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';

function App() {
    // Default data to show initially
    const defaultUsers = [
        { id: 1, name: 'John Doe', role: 'Software Engineer' },
    
    ];

    // State to manage users, loading, and error
    const [users, setUsers] = useState(defaultUsers);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch data when the button is clicked
    const fetchData = () => {
        setLoading(true);
        setError(null); // Reset any previous errors

        // Fetch data from backend API
        // TBD
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                User List
            </Typography>
            {/* Button to fetch data */}
            <Button 
                variant="contained" 
                color="primary" 
                onClick={fetchData} 
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Fetch Data'}
            </Button>

            {/* Show loading spinner if data is being fetched */}
            {loading && (
                <Container>
                    <CircularProgress />
                </Container>
            )}

            {/* Show error if something went wrong */}
            {error && (
                <Container>
                    <Typography color="error">{error}</Typography>
                </Container>
            )}

            {/* Display fetched or default data */}
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                {users.map((user) => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{user.name}</Typography>
                                <Typography variant="body2">{user.role}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default App;
