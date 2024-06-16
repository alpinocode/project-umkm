import { Sequelize } from "sequelize";

const db = new Sequelize('projectumkm', 'root', '', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
})

export default db