import { Router } from "express";
import { TaskController } from "../controllers/taskController";

const taskController = new TaskController();
const router = Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
