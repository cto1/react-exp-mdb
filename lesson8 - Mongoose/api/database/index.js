import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://app:zelig1234@ds029735.mlab.com:29735/zelig', () => {
    console.log('MongoBD connected.');
});

export default mongoose;
