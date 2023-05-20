const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))


//__dirname just give the path of the orginal file whereever it is in the server
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("Result of the Calculation is " + result); 
})

app.get('/bmicalculator', (req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req,res){
    var weight = req.body.weight;
    var height = req.body.height;
    var ans = (weight*10000)/(height * height);

    res.send("Your BMI is "+ ans);
})

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })