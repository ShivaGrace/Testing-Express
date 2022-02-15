//requiriendo componentes
const express = require("express");
const path = require("path");
const app = express();

const productRoutes = require("./routes/product.js");
const mainRoutes = require("./routes/main.js");
const userRoutes = require("./routes/user.js");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'))

// activacion del sever en port 3050 y configurando opciones de Heroku
app.listen(process.env.PORT || 3050, () =>
  console.log("servidor corriendo en puerto 3050")
);

app.use("/product",productRoutes);
app.use('/',mainRoutes);
app.use('/user',userRoutes);

// exponiendo la carpeta public
app.use(express.static(path.join(__dirname, "../public")));

