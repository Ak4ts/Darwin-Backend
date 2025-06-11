// Adaptador de métricas usando prom-client
import promClient from 'prom-client';
import { Request, Response } from 'express';

export class MetricsProvider {
  constructor() {
    promClient.collectDefaultMetrics();
  }

  metricsHandler = async (_req: Request, res: Response) => {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
  };
}
