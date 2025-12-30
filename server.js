const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint for command processing
app.get('/api/process', (req, res) => {
    const command = req.query.cmd;
    if (!command) {
        return res.status(400).json({ error: 'No command provided' });
    }

    // Process the command (simplified for demo)
    const response = {
        command: command,
        response: `Processed command: ${command}`,
        timestamp: new Date().toISOString()
    };

    res.json(response);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});