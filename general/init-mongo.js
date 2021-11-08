const usuario = process.env.MONGO_INITDB_ROOT_USERNAME;
const clave = process.env.MONGO_INITDB_ROOT_PASSWORD;
const baseDatos = process.env.MONGO_INITDB_DATABASE;
db.createUser(
    {
        user: usuario,
        pwd: clave,
        roles : [
            {
                role: "readWrite",
                db: baseDatos
            }
            
        ]
    }
)
