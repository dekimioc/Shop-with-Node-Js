const path = require('path');

const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const expressHbs = require('express-handlebars'); requiering express-handlebars

const errorController = require('./controllers/error');

const app = express();

// app.engine('handlebars', expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout' }));                // registering express-handlebars
//app.set('view engine', 'handlebars');        // Implementing handlebars templating engine
// app.set('view engine', 'pug');     // Implementing pug templating engine
app.set('view engine', 'ejs');        // Implementing ejs templating engine
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404Page)

app.listen(5000);