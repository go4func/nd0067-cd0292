import express from 'express';

import routes from './routes/index';

const app = express();
const port = 3000;

// routes
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export { app };
