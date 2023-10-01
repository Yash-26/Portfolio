// import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url))
// const app = express();
// const port = 3000;


function sendMail(){
   var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
   };
   
   const serviceID = "service_gierjgb";
   const templateID = "template_tikjhyv";
   
   
   emailjs.send("service_gierjgb","template_tikjhyv",params).then(function(res){
      alert("Thank You! I will reach out to you soon");
      location.reload();
   });
}

// app.get("/",(req,res) => {
//    res.sendFile(__dirname + "/public/index.html");
// });


// app.listen(port,() => {
//    console.log(`Server running on port ${port}`);
// });
