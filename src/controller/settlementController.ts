import { Request, Response } from "express";
import { Expense } from "../model/expense";
import { Settlement } from "../model/settlement";


export const recordSettlement = async (req: Request, res: Response) => {
    try {
        const { from, to, amount } = req.body;

        const settlement = await Settlement.create({ from, to, amount });

        res.status(201).json(settlement);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllSettlement = async (req: Request, res: Response) => {
    const expenses = await Settlement.find().sort({ createdAt: -1 });
    res.status(200).send({ data: expenses, message: "Data get Successfully" });
};

export const deleteSettlement = async (req: Request, res: Response) => {
    await Settlement.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Deleted successfully" });
};