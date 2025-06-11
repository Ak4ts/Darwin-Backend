// Adaptadores de health/readiness
import { Request, Response } from 'express';

export class HealthController {
  healthz(_req: Request, res: Response) {
    res.status(200).json({ status: 'ok', uptime: process.uptime() });
  }

  readyz(_req: Request, res: Response) {
    // Aqui pode-se adicionar lógica para checar dependências (ex: RabbitMQ, DB)
    res.status(200).json({ ready: true });
  }
}
