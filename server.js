require('dotenv').config();

const app = require('express')();

app.get('/', (req, res) => {
   res.json("Hello World!")
})

const port = process.env.PORT;
console.log(port)

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})
