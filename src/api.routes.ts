import { Request, Response, Router } from 'express';
import successResponse from './utils/successResponse';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(successResponse({ message: 'App running successfully' }));
});

export default router;
