import db from './index';

export default db.model('zuser', {
    name: String,
    pw: String,
});
