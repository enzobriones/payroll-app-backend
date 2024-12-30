import { Router } from 'express';

const payrollsRouter = Router();

payrollsRouter.get('/', (req, res) => {
  res.json('Get all payrolls');
})

export default payrollsRouter;