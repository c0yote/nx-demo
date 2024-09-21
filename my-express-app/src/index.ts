import express, { Request, Response } from 'express';

import { billQuote } from './quote';

const app = express();
const port = 3000;

// Endpoint to get a random quote
app.get('/quote', (req: Request, res: Response) => {
  res.json({ quote: billQuote() });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
