const path = require('path');

const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const expressHbs = require('express-handlebars'); requiering express-handlebars

const app = express();

// app.engine('handlebars', expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout' }));                // registering express-handlebars
//app.set('view engine', 'handlebars');        // Implementing handlebars templating engine
// app.set('view engine', 'pug');     // Implementing pug templating engine
app.set('view engine', 'ejs');        // Implementing ejs templating engine
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404page', { pageTitle: 'Page Not Found' });
})

app.listen(5000);