import express from 'express';
import { projectController } from '../controllers/projectController';

const router = express.Router();

router.get('/', projectController.getAllProjects);
router.post('/', projectController.createProject);
router.put('/:projectId/assign', projectController.assignProject);
router.post('/:projectId/accept', projectController.acceptProject);

export default router;