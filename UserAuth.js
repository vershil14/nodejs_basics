let  http = require ('http')
let url = require ('url')
let port=6555
let login=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login page </title>
</head>
<body>
<form action="/Login">
   Username: <input type="text" name="username" placeholder="username"><br>
   Password: <input type="text" placeholder="password" name=password><br>
               <input type="submit"value="submit">
               <input type="reset" value="clear">


</form>
</body>
</html>`

 let app = http.createServer((req,res)=>{



     let urlInfo = url.parse(req.url,true)
     console .log(req.url)
     if (urlInfo!=="/favicon.ico"){
            if(urlInfo.path=="/login"){
                res.write (login)
            }

            if (urlInfo.pathname=="/Login"){
                let  Username= "admin"
                let Password="admin123"

                let username=urlInfo.query.username
                let password=urlInfo.query.password
                console.log(username)
                console.log(password)

                if (Username==username && Password==password){
                    res.write(`<html><body><h1>user login successful </h1></body></html>`)

                }
                else {
                    res.write(`<html><body><h1>Enter valid username and password</h1></body></html>`)
                }

            }



     }
     res.end()
})
app.listen(port,()=>{
    console.log("server is running on port :", port)
})
