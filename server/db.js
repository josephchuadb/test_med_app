const mongoose = require('mongoose');
const mongoURI =  "mongodb://root:XYLbXI9JI9qcn7TAdhNtqvAF@172.21.134.36:27017";
// const mongoURI =  "mongodb://root:ChxyAiMWn4vq0YlYNFKuw5Bd@127.0.0.1:27017";

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    try {
        await mongoose.connect(mongoURI, { dbName: 'stayhealthybeta1'});
        console.info('Connected to Mongo Successfully')

        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`)

        return await connectToMongo(nextRetryCount);

    }
};

module.exports = connectToMongo;