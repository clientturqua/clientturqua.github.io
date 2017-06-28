export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port?: number;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
  dialectOptions: object;
}


// Azure MS SQL 
export const databaseConfig: DatabaseConfig = {
username: "adminDB",
password: "Todo1234",
database: "todoAppDB",
host: "todo-app-sd.database.windows.net",
dialect: "mssql",
logging: true,
force: false,
timezone: "+00:00",
dialectOptions: {
port: 1433,
encrypt: true
}
};
