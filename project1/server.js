const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const exphbs = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const appVariables = require('./middleware/application_variables')

//=========== Routes ===========//
const homeRoutes = require('./routes/home_routes')
const createRoutes = require('./routes/create_routes')
const authenticationRoutes = require('./routes/authentication_routes')
const userRoutes = require('./routes/user_routes')
const notFoundRoutes = require("./routes/not_found_routs")

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


application.use(homeRoutes)
application.use(createRoutes)
application.use(authenticationRoutes)
application.use(userRoutes)
application.use(notFoundRoutes);

async function start() {
    try {
        await mongoose.connect("mongodb+srv://Admin:Admin@applicationcluster.nreuz.mongodb.net/userDatabase", {
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

// repuest body საზეპირო მოაქვს ინფორმაცია ფრონტიდან ბექში
// გამოსვლა: ../  ჩასვლა: /
