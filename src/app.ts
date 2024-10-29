import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware to parse JSON and plain text
app.use(express.json());  // Parses application/json
app.use(express.text());  // Parses text/plain

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
