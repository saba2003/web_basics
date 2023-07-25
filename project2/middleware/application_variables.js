module.exports = function(request, response, next) {
    response.locals.isAuth = request.session.isAuthenticated
    response.locals.user = request.session.user

    next()
} 

// მოკლე სინტაქსი
// module.exports = function(request, response, next) {} 

// გრძელი სინტაქსი
// function(request, response, next) {} 
// module.exports = function()