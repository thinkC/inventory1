var express = require("express");
var app = express();
var ejs = require("ejs");
var bodyParser = require("body-parser");

// console.log(require("./public/app1"));
// console.log(require("./views/new"));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.locals.getTotal = 'getTotal';

// var chemicals = [
        
//         {
//             chemical_code : "MZ01",
//             chemical_description : "Acetic",
//             initial_quantity : 5000,
//             quantity_requested : 0,
//             package_type : "Gallon",
//             lot_number : 012345,
//             department : "Well Service",
//             country : "Nigeria",
//             manufacturing_date : new Date(2018, 6, 5)
//         },
//         {
//             chemical_code : "MZ02",
//             chemical_description : "Calcium",
//             initial_quantity : 3000,
//             quantity_requested : 0,
//             package_type : "Drum",
//             lot_number : 012346,
//             department : "Miswaco",
//             country : "Nigeria",
//             manufacturing_date : new Date(2016, 5, 20)
//         },
//           {
//             chemical_code : "MZ03",
//             chemical_description : "Chlorine",
//             initial_quantity : 3200,
//             quantity_requested : 0,
//             package_type : "Bag",
//             lot_number : 012347,
//             department : "Miswaco",
//             country : "Nigeria",
//             manufacturing_date : new Date(2019, 1, 15)
//         },
        
        
        
        
//         ]

var chemicals = [
        
        {
            code : "MZ01",
            desc : "Acetic",
            Iqty: 5000,
            stock:0,
            Rqty : 0,
            pac  : "Gallon",
            lot : 012345,
            dept : "Reservoir Service",
            country : "Nigeria",
            manu_date : new Date(2018, 6, 5),
            exp_date: new Date(2019, 10, 8)
        },
        {
            code : "MZ02",
            desc : "Calcium",
            Iqty : 3000,
            stock:0,
            Rqty : 0,
            pac : "Drum",
            lot : 012346,
            dept : "Thames",
            country : "Congo",
            manu_date : new Date(2016, 5, 20),
            exp_date: new Date(2019, 6, 10)
        },
           {
            code : "MZ03",
            desc : "Chlorine",
            Iqty : 3200,
            stock:0,
            Rqty : 0,
            pac : "Bag",
            lot  : 012347,
            dept : "Thames",
            country : "Germany",
            manu_date : new Date(2019, 1, 15),
            exp_date: new Date(2020, 10, 8)
        },
        
        
        
        
        ]

app.get("/", function(req, res){
    res.render("landing")
})


app.get("/chemicals", function(req, res){
    
        res.render("chemicals", {chemicalsVar  : chemicals})
})


app.post("/chemicals", function(req, res){
    var code = req.body.code;
    var desc = req.body.desc;
    var Iqty = req.body.Iqty;
    var Rqty = req.body.Rqty;
    var pac = req.body.pac;
    var lot = req.body.lot;
    var dept = req.body.dept;
    var country = req.body.country;
    var manu_date = req.body.manu_date;
    var exp_date = req.body.exp_date;
    var stock = req.body.stock;
    
    var newChemical = {code:code,desc:desc,Iqty:Iqty,Rqty: Rqty,pac:pac,lot:lot,dept:dept,country:country,manu_date:manu_date, exp_date:exp_date,
        stock:stock
    };
    
    //get data from form and add to chemicals array
    chemicals.push(newChemical);
    console.log(chemicals);
    res.redirect('/chemicals');
})


//Add new chemicals
app.get("/chemicals/new", function(req, res) {
    //res.locals.getTotal = 'getTotal';
    res.render("new")
})



// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log('Inventory App started...')
// })

app.listen(3000, function(){
    console.log('Inventory App started...')
})