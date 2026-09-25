const express = require('express');
const cors = require('cors');
const path = require('path');
const { getPageData, submitConnect } = require('./lib/api-data');

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(express.json());

// Serve static assets from root directory
app.use(express.static(__dirname));

// REST API Content endpoints
app.get('/api/pages/approach', (req, res) => {
  res.json(getPageData('approach'));
});

app.get('/api/pages/how-it-works', (req, res) => {
  res.json(getPageData('how-it-works'));
});

app.get('/api/pages/ecosystem', (req, res) => {
  res.json(getPageData('ecosystem'));
});

app.get('/api/pages/connect', (req, res) => {
  res.json(getPageData('connect'));
});

app.get('/api/pages/projects', (req, res) => {
  res.json(getPageData('projects'));
});

// Handle form submissions
app.post('/api/submit-connect', (req, res) => {
  const { name, email, company, message } = req.body;
  console.log('--- New Connect Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Company: ${company}`);
  console.log(`Message: ${message}`);
  console.log('------------------------------');

  res.status(200).json(submitConnect());
});

// Fallback to index.html for undefined routes (or send index.html)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Glade Premium Server running at http://localhost:${PORT}`);
});
