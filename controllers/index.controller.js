const indexController = {
    getHome: (req, res, next) => {
        res.render('home', { title: 'Home' });
    }
}

module.exports = indexController;