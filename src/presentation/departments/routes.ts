import { Router } from 'express';

const departmentsRouter = Router();

departmentsRouter.get('/', (req, res) => {
  res.json('Get all departments');
})

export default departmentsRouter;