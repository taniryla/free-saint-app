// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Category = require('./models/category');
const Item = require('./models/item');
const Food = require('./models/foods');

// Local variables will come in handy for holding retrieved documents
let user, item, category, food;
let users, items, categories, dishes;

