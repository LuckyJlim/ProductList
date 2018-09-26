import app from './app';

const { PORT = 13002 } = process.env;

app.listen(PORT, () => console.log('Listening on port', PORT));
