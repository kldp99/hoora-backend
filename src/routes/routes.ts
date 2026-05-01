import express from "express";
import { createExpense, getExpenses, deleteExpense } from "../controller/expenseController";

const router = express.Router();

router.get("/get-all-expense", getExpenses);
router.post("/create-expense", createExpense);
router.delete("/delete-expense/:id", deleteExpense);


export default router;