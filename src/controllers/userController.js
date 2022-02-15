const userController = {
    login: (req,res) => {
        res.render('login');
    },
    perfil: (req,res) => {
        res.render('perfil');
    },
    registro: (req,res) => {
        res.render('registro');
    },
}

module.exports = userController;
