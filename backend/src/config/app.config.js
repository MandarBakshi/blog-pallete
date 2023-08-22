import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const appConfig = {
    "node_port": process.env.PORT,

    "mysql": {
        "host": process.env.DB_MYSQL_HOST,
        "user": process.env.DB_MYSQL_USER,
        "passwd": process.env.DB_MYSQL_PASSWORD,
        "port": process.env.DB_MYSQL_PORT,
        "db_name": process.env.DB_MYSQL_NAME,
    },

    "auth": {
        "salt_rounds": Number(process.env.SALT_ROUNDS),
        "jwt_key": process.env.JWT
    }
};