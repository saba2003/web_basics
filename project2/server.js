const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const exphbs = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const multer = require('multer')
const appVariables = require('./middleware/application_variables')

//=========== Routes ===========//
const homeRoutes = require('./routes/home_routes')
const aboutRoutes = require('./routes/about_routes')
const loginRoutes = require('./routes/login_routes')
const registrationRoutes = require('./routes/registration_routes')
const contactRoutes = require('./routes/contact_routes')
const notFoundRoutes = require('./routes/not_found_routes')

//=========== loggedInRoutes ===========//
const userRoutes = require('./loggedInRoutes/user_routes')
const forumRoutes = require('./loggedInRoutes/forum_routes')
const galleryRoutes = require('./loggedInRoutes/gallery_routes')
const marketRoutes = require('./loggedInRoutes/market_routes')

const PORT = process.env.PORT || 5000

const application = express()

const hbs = exphbs.create({
    
    defaultLayout: 'main',
    extname: 'hbs'

})

application.engine('hbs', hbs.engine)
application.set('view engine', 'hbs')
application.set('views', 'views')

application.use(express.urlencoded({ extended: true }))

application.use(
    session(
        {
            secret: 'my_secret_key',
            resave: true,
            saveUninitialized: false
        }
    )
)

application.use(express.static(
    path.join(
        path.dirname(__filename), 'public'
    )
))


// User <------------> Middleware <-----------> Application/website

// ========== Application Middlewares Start ========== //

application.use(appVariables)
application.use(flash())

// ========== Application Middlewares End ========== //


//=========== Routes ===========//
application.use(homeRoutes)
application.use(aboutRoutes)
application.use(loginRoutes)
application.use(registrationRoutes)
application.use(contactRoutes)

//=========== Logged In Routes ===========//
application.use(userRoutes)
application.use(forumRoutes)
application.use(galleryRoutes)
application.use(marketRoutes)

//=========== Not Found Routes ===========//
application.use(notFoundRoutes)

async function start() {
    try {
        await mongoose.connect("mongo account URI", {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        application.listen(PORT, function() {
            console.log(chalk.bold.cyan("Server has been started..."))
        })
    } catch (error) {
        console.log(chalk.bold.red(error, "error in START function"))
    }
}

start()
