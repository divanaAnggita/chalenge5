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
    tinggi /=100;


    let bmi = berat / (tinggi * tinggi)
    let status = bmi

    if(bmi < 18.5){
        status = "kekurangan berat badan";
    }else if (bmi >= 18.5 && bmi <= 24.9){
        status = "berat badan normal";
    }else if (bmi >= 25 && bmi <= 29.9){
        status = "kelebihan berat badan";
    }else{
        status = "obesitas"
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