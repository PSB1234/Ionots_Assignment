import express from 'express';
import { assignmentController } from '../controllers/assignmentController';

const router = express.Router();

router.get('/User/:userId', assignmentController.getAssignmentsByUser);
router.post('/User/assign', assignmentController.postAssignmentsByUser);
router.put('/:assignmentId/progress', assignmentController.updateProgress);
router.put('/:assignmentId/score', assignmentController.submitScore);

export default router;
