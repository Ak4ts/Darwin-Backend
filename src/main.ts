import express from 'express';
import dotenv from 'dotenv';
import { PinoLogger } from '@infrastructure/logger/pino-logger';
import { MetricsProvider } from '@infrastructure/metrics/metrics-provider';
import { HealthController } from '@interfaces/http/health-controller';

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Providers/adapters
const logger = new PinoLogger();
const metrics = new MetricsProvider();
const health = new HealthController();

app.use(express.json());

// Health & readiness
app.get('/healthz', health.healthz);
app.get('/readyz', health.readyz);

// Métricas Prometheus
app.get('/metrics', metrics.metricsHandler);

// Exemplo de endpoint raiz
app.get('/', (_req, res) => {
  logger.info('Root endpoint accessed');
  res.send('Darwin Backend API');
});

app.listen(port, () => {
  logger.info(`Darwin Backend rodando na porta ${port}`);
});
