import db from './index';

export default db.model('Customer', {
    name: String,
    upsertTime: Date,
});
