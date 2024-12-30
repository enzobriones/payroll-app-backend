import { Router } from "express";

const companiesRouter = Router();

companiesRouter.get('/', (req, res) => {
  res.json('Get all companies');
})

export default companiesRouter;