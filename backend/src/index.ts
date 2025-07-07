import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
  res.status(200).send('RepoQuery backend is up!');
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
