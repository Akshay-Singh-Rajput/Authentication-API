const connectDB = require('./config/database');
require('dotenv').config();
const app = require('./index');

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
});