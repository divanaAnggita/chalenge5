const express = require("express") // memanggil library express js  
const bodyParser = require("body-parser") // memanggil library body-parser  
const cors = require("cors") // memanggil library cors  
const app = express()  
  
// penggunaan body-parser untuk ekstrak data request berformat JSON  
app.use(bodyParser.json())  
  
// penggunaan body-parser untuk ekstrak data request berformat JSON  
app.use(bodyParser.urlencoded({ extended: true }))  
  
// penggunaan cors agar end point dapat diakses oleh cross platform  
app.use(cors()) 

// end-point "/BMI" dengan method POST  
app.post("/BMI", (req,res) => { 
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / (tinggi * tinggi)
    let status = bmi

    if (bmi >= 30.0) {
        status = "Kegemukan(Obesitas)"
    } else if (bmi >= 25.0) {
        status = "Kelebihan Berat Badan"
    } else if (bmi >= 18.5) {
        status = "Normal(Ideal)"
    } else {
        status = "Kekurangan Berat Badan"
    }

    let response = {  
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    } 
    
    // memberikan response dengan format JSON yang berisi objek di atas  
    res.json(response)  
})  
    

//menjalankan server pada port 8000  
app.listen(8000,()=> {  
    console.log("Server run on port 8000");   
})