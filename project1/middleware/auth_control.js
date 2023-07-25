module.exports = function(request, response, next) {
    if (!request.session.isAuthenticated){
        return response.redirect('/authentication/login')
    }

    next()
}