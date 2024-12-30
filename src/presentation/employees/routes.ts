import { Router } from 'express';

const employeesRouter = Router();

employeesRouter.get('/', (req, res) => {
  res.json('Get all employees');
});

export default employeesRouter;
