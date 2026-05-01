import { Request, Response } from "express";
import { Expense } from "../model/expense";

export const splitProcess = ({ amount, participants, splitType }: any) => {
    if (splitType === "unequal") return participants;

    if (splitType == "equal") {
        const share = Number((amount / participants?.length).toFixed(2));
        return participants.map((user: any) => ({
            userId: user?.userId,
            shareAmount: share
        }));
    }

};


export const createExpense = async (req: Request, res: Response) => {
    try {
        const { description, amount, payer, participants, splitType } = req.body;

        if (!payer || !amount || !participants) return res.status(400).send({ error: "Missing fields" });

        const processedParticipants: any = splitProcess({
            amount,
            participants,
            splitType
        });
        console.log({
            description,
            amount,
            payer,
            participants: processedParticipants?.filter((e: any) => e?.shareAmount),
            splitType
        })
        const expense = await Expense.create({
            description,
            amount,
            payer,
            participants: processedParticipants?.filter((e: any) => e?.shareAmount),
            splitType
        });

        res.status(201).send({ data: expense, message: "Expense Create Successfully" });
    } catch (err: any) {
        res.status(400).send({ error: err.message });
    }
};

export const getExpenses = async (req: Request, res: Response) => {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).send({ data: expenses, message: "Data get Successfully" });
};

export const deleteExpense = async (req: Request, res: Response) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Deleted successfully" });
};