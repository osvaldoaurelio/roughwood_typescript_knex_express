import dotenv from 'dotenv';
import { register } from 'ts-node';

dotenv.config();
register();

const knexfile = {
  development: {
    client: 'sqlite',
    connection: {
      filename: `${__dirname}/db.sqlite`,
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      port: 3306,
      host: 'localhost',
      database: 'roughwood_db',
      user: 'root',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/migrations`,
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
};

// /** não funciona */
// const knexfile = {
//   client: 'mysql2',
//   connection: {
//     port: Number(process.env.DATABASE_PORT),
//     host: process.env.DATABASE_HOST,
//     database: process.env.DATABASE_NAME,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//   },
//   pool: {
//     min: Number(process.env.DATABASE_POOL_MIN),
//     max: Number(process.env.DATABASE_POOL_MAX),
//   },
//   migrations: {
//     directory: `${__dirname}/migrations`,
//     tableName: 'knex_migrations',
//   },
//   seeds: {
//     directory: `${__dirname}/seeds`,
//   },
// };

export default knexfile;
