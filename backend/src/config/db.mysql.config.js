import mysql from 'mysql2';
import { appConfig } from './app.config.js';

const dbConfig = {
    host: appConfig.mysql.host,
    user: appConfig.mysql.user,
    password: appConfig.mysql.passwd,
    database: appConfig.mysql.db_name
};

const queryPool = mysql.createPool(dbConfig).promise();

export { queryPool }