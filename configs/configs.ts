import { databaseConfig, DatabaseConfig } from "./database-config";
import { loggingConfig, LoggingConfig } from "./logging-config";
import { serverConfig, ServerConfig } from "./server-config";
import { mailConfig, MailConfig } from "./mail-config";

class Configs {
  private _databaseConfig: DatabaseConfig;
  private _loggingConfig: LoggingConfig;
  private _serverConfig: ServerConfig;
  private _mailConfig: MailConfig;

  constructor() {
    this._databaseConfig = databaseConfig;
    this._loggingConfig = loggingConfig;
    this._serverConfig = serverConfig;
    this._mailConfig = mailConfig;
  }

  getDatabaseConfig(): DatabaseConfig {
    return this._databaseConfig;
  }

  getLoggingConfig(): LoggingConfig {
    return this._loggingConfig;
  }

  getServerConfig(): ServerConfig {
    return this._serverConfig;
  }
  getMailConfig(): MailConfig {
    return this._mailConfig;
  }
}

export const configs = new Configs();
