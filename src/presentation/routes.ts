import { Router } from 'express';

import companiesRouter from './companies/routes';
import departmentsRouter from './departments/routes';
import positionsRouter from './positions/routes';
import employeesRouter from './employees/routes';
import payrollsRouter from './payrolls/routes';

const router = Router();

//* Endpoints
router.use('/api/companies', companiesRouter);
router.use('/api/departments', departmentsRouter);
router.use('/api/positions', positionsRouter);
router.use('/api/employees', employeesRouter);
router.use('/api/payrolls', payrollsRouter);

export default router;
