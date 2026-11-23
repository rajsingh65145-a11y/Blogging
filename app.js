require('dotenv').config();

const dns = require('dns');

// Local DNS workaround
// Render production environment mein Google DNS force nahi karenge
if (process.env.NODE_ENV !== 'production') {
    dns.setServers(['8.8.8.8', '8.8.4.4']);
}

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000;

// Import routes and models
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const Blog = require('./models/blog');

const { checkForAuthenticationCookie } = require('./middlewares/authentication');

// EJS configuration
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(checkForAuthenticationCookie('token'));

app.use(express.static(path.resolve('./public')));

// Routes
app.use('/user', userRouter);
app.use('/blog', blogRouter);

// Home route
app.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.find({});

        res.render('home', {
            user: req.user,
            blogs: allBlogs
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB Atlas Connected Successfully');

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    });