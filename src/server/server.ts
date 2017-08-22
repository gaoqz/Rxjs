import * as express from 'express';
import { Application } from 'express';
import { loginRoute } from './loginRoute';
import { newsletterRoute } from './newsletterRoute';
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

console.log('Starting server ...');

app.route('/api/newsletter').post(newsletterRoute);
app.route('/api/login').post(loginRoute);

app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
