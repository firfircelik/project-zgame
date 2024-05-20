const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { sequelize } = require('./config/sequelize');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/payments', paymentRoutes);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
