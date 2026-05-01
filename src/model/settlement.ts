import mongoose from "mongoose";

const settlementSchema = new mongoose.Schema(
    {
        from: { type: String, required: true },
        to: { type: String, required: true },
        amount: { type: Number, required: true },
    },
    { timestamps: true }
);

const Settlement = mongoose.model("Settlement", settlementSchema);

export { Settlement };
