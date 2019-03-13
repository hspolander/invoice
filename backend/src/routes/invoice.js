import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.invoiceData));
});

router.get('/:invoiceId', (req, res) => {
  return res.send(req.context.invoiceData[req.params.invoiceId]);
});


export default router;