const express = require("express");
require("express-async-errors")
const routes = require("./routes")

const AppError = require("./utils/AppError")
const database = require("./database/sqlite")

database()

const app = express();
app.use(express.json())
app.use(routes)

app.use((error, requiest, response, next ) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status:"error",
            message:error.message,
        });
    }
        return response.status(500).json({
            error:"error",
            message:"Internal Server Error",
        });
    
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
