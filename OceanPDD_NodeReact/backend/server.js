// Express server for the backend
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const parallels = [
    { human: "Heart", ocean: "Currents (Thermohaline Pump)", description: "Both circulate essential elements." },
    { human: "Lungs", ocean: "Photosynthesis", description: "Exchange gases and support life." },
    { human: "Nervous System", ocean: "Marine Food Web", description: "Coordinates and sustains life functions." }
];

app.get('/api/parallels', (req, res) => {
    res.json(parallels);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
