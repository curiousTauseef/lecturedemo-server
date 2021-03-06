let express = require("express");
let cors = require("cors");

let EmployeeModule = require("./day14/EmployeeModule");

class AppServer{

    static main(){
        try{
            let app = express();
            app.use(cors()); // CROSS ORIGIN REUEST ALLOWING

            app.get("/", (req, res)=>{
                let output = {"name":"CDAC"};
                res.json(output);
            });

            app.get("/hello/1", (req, res)=>{
                let output = {"name":"Hello CDAC"};
                res.json(output);
            });

            app.get("/emp", (req, res)=>{

                EmployeeModule.readAllEmployee((data)=>{
                    res.json(data);
                });
                
            });

            app.listen(4000, ()=>{
                console.log("Server started...");
            });
        }catch(err){
            console.log(err);
        }
    }
}

AppServer.main();