import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import pino from 'pino';
import promClient from 'prom-client';

// Este arquivo foi migrado para Clean Architecture. Veja src/main.ts para o ponto de entrada do app.

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Logger estruturado
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

// Prometheus metrics
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();

app.get('/healthz', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.get('/readyz', (req: Request, res: Response) => {
  // Aqui pode-se adicionar lógica para checar dependências (ex: RabbitMQ, DB)
  res.status(200).json({ ready: true });
});

app.get('/metrics', async (req: Request, res: Response) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  logger.info('Root endpoint accessed');
  res.send('Darwin Backend API');
});

app.listen(port, () => {
  logger.info(`Darwin Backend rodando na porta ${port}`);
});
