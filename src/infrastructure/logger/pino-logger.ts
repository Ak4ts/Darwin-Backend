// Adaptador de logging usando Pino
import pino from 'pino';

export interface Logger {
  info(message: string, meta?: unknown): void;
  error(message: string, meta?: unknown): void;
  warn(message: string, meta?: unknown): void;
  debug(message: string, meta?: unknown): void;
}

export class PinoLogger implements Logger {
  private logger = pino({ level: process.env.LOG_LEVEL || 'info' });

  info(message: string, meta?: unknown) {
    this.logger.info(meta || {}, message);
  }
  error(message: string, meta?: unknown) {
    this.logger.error(meta || {}, message);
  }
  warn(message: string, meta?: unknown) {
    this.logger.warn(meta || {}, message);
  }
  debug(message: string, meta?: unknown) {
    this.logger.debug(meta || {}, message);
  }
}
