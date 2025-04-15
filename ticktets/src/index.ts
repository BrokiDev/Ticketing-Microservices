import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));


app.get('/api/tickets', (req, res) => {
  res.status(200).json({ message: 'Get all tickets' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});