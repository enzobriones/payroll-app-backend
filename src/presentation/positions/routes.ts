import { Router } from 'express';

const positionsRouter = Router();

positionsRouter.get('/', (req, res) => {
  res.json('Get all positions');
});

export default positionsRouter;
