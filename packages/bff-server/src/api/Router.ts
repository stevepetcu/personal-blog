import express from 'express';
import { fooService } from '../service';

const ENDPOINTS: Record<string, string> = {
  testEndpoint: '/data',
};

const router = express.Router();

router.get(ENDPOINTS.testEndpoint, (req, res) => {
  res.status(200).json(fooService.foo());
});

export { router, ENDPOINTS };
