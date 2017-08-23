import { dbData } from './db-data';
import * as _ from 'lodash';

export function lessonDetailRoute (req, res) {

    const lessonUrl = req.params['id'];

    console.log('Looking for lesson with url', lessonUrl);

    let allLessons = [];

    dbData.forEach(course => allLessons = allLessons.concat(course.lessons));

    const lesson = _.find(allLessons, le => le.url === lessonUrl);

    console.log('lesson', lesson);

    res.status(200).json(lesson);
}
