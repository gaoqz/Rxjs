import * as express from 'express';
import { Application } from 'express';
import { loginRoute } from './loginRoute';
import { newsletterRoute } from './newsletterRoute';
import { courseRoute } from './courseRoute';
import { lessonDetailRoute} from './lessonDetailRoute';
import { lessonsRoute } from './lessonsRoute';
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

console.log('Starting server ...');

app.route('/api/newsletter').post(newsletterRoute);
app.route('/api/login').post(loginRoute);

app.route('/api/courses/:id').get(courseRoute);
app.route('/api/lessons').get(lessonsRoute);
app.route('/api/lessons/:id').get(lessonDetailRoute);

app.listen(8090, () => {
    console.log('Server is now running on port 8090 ...');
});
