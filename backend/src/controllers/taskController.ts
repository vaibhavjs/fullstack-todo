import { Request, Response } from "express";
import { Task } from "../models/task";

export class TaskController {
    async getAllTasks(req: Request, res: Response) {
        try {
            const tasks = await Task.findAll();
            res.json(tasks);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async createTask(req: Request, res: Response) {
        try {
            const task = await Task.create(req.body);
            res.status(201).json(task);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async getTaskById(req: Request, res: Response) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (task) {
                await task.update(req.body);
                res.json(task);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const task = await Task.findByPk(req.params.id);
            if (task) {
                await task.destroy();
                res.status(204).json();
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }
}
