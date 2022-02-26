// Requires



// Controllers
const mainController = {
    index: (req,res) => {
        res.render('index',{ title: 'Home' });
    }
}

// Module export
module.exports = mainController;
