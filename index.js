
const server = require ('./src/server')
const dbConect = require('./src/lib/db')

dbConect()
    .then(() => {
        console.log('DB Conected');
        server.listen(8080, () => {
            console.log('Server is listening');
        })
    })
    .catch((error) => {
        console.error('DB conection error: ', error)
    })

// GET/koders
// 1. Crear (o asegurarse de que exista) el Modelo necesario
// 2. Crear el caso de uso necesario
// 3. Crear el endpoint necesario
