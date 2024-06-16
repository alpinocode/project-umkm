import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// env implementasi
dotenv.config()

const port = process.env.PORT


// express implementasi 
const app = express()

app.arguments(express.json())

app.listen(port, () => {
    console.log(`Server berjalan pada local, ${port}`)
})
