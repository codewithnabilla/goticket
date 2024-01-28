import express from 'express';

import { getAllEvents, saveEventData } from '../controllers/sample.controller';

const router = express.Router();
router.post('/save-event-data', saveEventData);
router.get('/get-events', getAllEvents);

export default router;
