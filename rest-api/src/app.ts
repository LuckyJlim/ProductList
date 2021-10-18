import express from 'express';
import routes from './routes';
import { errorLogger, errorResponder } from './middleware';

const app = express();

app.get('/', function(req, res) {
  throw new Error('BROKEN');
});
app.use('/api', routes);

app.use(errorLogger);
app.use(errorResponder);

export default app;
