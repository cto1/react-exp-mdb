import db from './index';

export default db.model('zapplication', {
    name: String,
    upsertTimeS: Date,
});
