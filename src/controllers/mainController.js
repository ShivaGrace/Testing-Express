const mainController = {
    index: (req,res) => {
        res.render('index',{ title: 'Home' });
    },

    carrito: (req, res) => {
        res.render('carrito', { title: 'Carrito de compras' })
    },
    perfil: (req, res) => {
        res.render('perfil', { title: 'Editar Perfil' })
    },
    login: (req, res) => {
        res.render('login', { title: 'Login' })
    },
    registro: (req, res) => {
        res.render('registro', { title: 'Registro' })
    },
    usuarios: (req, res) => {
        res.send('pagina de usuarios TBD')
    }
}

module.exports = mainController;


//test