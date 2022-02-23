const mainController = {
    index: (req,res) => {
        res.render('index');
    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    perfil: (req, res) => {
        res.render('perfil')
    },
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('registro')
    }
}

module.exports = mainController;

//

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		res.render('index',{productos: products});
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;