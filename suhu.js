const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.get("/convert/celcius/:celcius", (req,res) => {
    let celcius = Number(req.params.celcius)
    let result;

    let reamur = 4/5 * celcius
    let fahrenheit = (9/5 * celcius) + 32
    let kelvin = 273 + celcius

    let response = {
        celcius : celcius,
        result : result = {
            reamur : reamur,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }
    res.json(response);
})

app.get("/convert/reamur/:reamur", (req,res) => {
    let reamur = Number(req.params.reamur)
    let result;

    let celcius = 5/4 * reamur
    let fahrenheit = (9/4 * reamur) + 32
    let kelvin = (5/4 * reamur) + 273

    let response = {
        reamur : reamur,
        result : result = {
            celcius : celcius,
            fahrenheit : fahrenheit,
            kelvin : kelvin
        }
    }
    res.json(response);
})

app.get("/convert/kelvin/:kelvin", (req,res) => {
    let kelvin = Number(req.params.kelvin)
    let result;

    let celcius = kelvin - 273
    let reamur = 4/5 * (kelvin - 273.15)
    let fahrenheit = 9/5 * (kelvin - 273.15) + 32

    let response = {
        kelvin : kelvin,
        result : result = {
            celcius : celcius,
            fahrenheit : fahrenheit,
            reamur : reamur
        }
    }
    res.json(response);
})

app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    let fahrenheit = Number(req.params.fahrenheit)
    let result;

    let celcius = 5/9 * (fahrenheit - 32)
    let reamur = 4/9 * (fahrenheit - 32)
    let kelvin = 5/9 * (fahrenheit - 32) + 273

    let response = {
        fahrenheit : fahrenheit,
        result : result = {
            celcius : celcius,
            reamur : reamur,
            kelvin : kelvin
        }
    }
    res.json(response);
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
