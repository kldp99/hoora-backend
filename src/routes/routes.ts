import express from "express";
import { createExpense, getExpenses, deleteExpense } from "../controller/expenseController";
import { getAllSettlement, recordSettlement } from "../controller/settlementController";

const router = express.Router();

router.get("/get-all-expense", getExpenses);
router.post("/create-expense", createExpense);
router.delete("/delete-expense/:id", deleteExpense);
router.delete("/delete-settlement/:id", deleteExpense);
router.post("/settlement", recordSettlement);
router.get("/get-all-settlement", getAllSettlement);


export default router;