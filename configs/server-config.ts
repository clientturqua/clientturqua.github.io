export interface ServerConfig {
  port: number,
  secret: string,
  session: {
    secret: string,
    name: string,
    resave: boolean,
    saveUninitialized: boolean,
    proxy: boolean
  };
}

export const serverConfig: ServerConfig = {
  port: 3000,
  secret: 's3cr3t',
  session: {
    secret: "sequelize-typescript-examples",
    name: "sequelize-typescript-examples",
    resave: false,
    saveUninitialized: false,
    proxy: false
  }
};
