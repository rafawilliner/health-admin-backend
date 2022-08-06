const {
    DB_HOST_DEV,
    DB_USER_DEV,
    DB_PASS_DEV,
    DB_DATABASE_DEV,
    DB_HOST_TEST,
    DB_USER_TEST,
    DB_PASS_TEST,
    DB_DATABASE_TEST,
    NODE_ENV
} = process.env

const host = NODE_ENV === "development"
    ? DB_HOST_DEV
    : DB_HOST_TEST


const user = NODE_ENV === "development"
    ? DB_USER_DEV
    : DB_USER_TEST

const pass = NODE_ENV === "development"
    ? DB_PASS_DEV
    : DB_PASS_TEST

const database = NODE_ENV === "development"
    ? DB_DATABASE_DEV
    : DB_DATABASE_TEST

/*console.log(host)
console.log(user)
console.log(pass)
console.log(database)*/

module.exports = {
    HOST: host,
    USER: user,
    PASSWORD: pass,
    DB: database,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};