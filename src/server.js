import express from 'express';

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // 사용할 port번호와,  callback;

// app.listen(4000, () => console.log('server listenting on port 4000')); // 5,6 라인 한 줄로 줄이면 이렇게도 가능
