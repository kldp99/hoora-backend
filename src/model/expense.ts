import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    shareAmount: { type: Number, required: true }
});

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    payer: { type: String, required: true },
    participants: [participantSchema],
    splitType: {
        type: String,
        enum: ["equal", "unequal"],
        required: true
    }
}, { timestamps: true });

const Expense = mongoose.model('Expense', expenseSchema);

export { Expense };
