import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Inquiry extends Document {
  productName: string;
  quantity: number;
  unit: 'Pcs' | 'Kg' | 'Liters'; // Restricted to specific units
  details: string;
  status: 'pending' | 'responded' | 'closed';
  createdAt: Date;
}

const InquirySchema: Schema = new Schema(
  {
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: {
      type: String,
      enum: ['Pcs', 'Kg', 'Liters'], // Enforce your specific units
      required: true
    },
    details: { type: String },
    status: {
      type: String,
      enum: ['pending', 'responded', 'closed'],
      default: 'pending'
    },
  },
  { timestamps: true }
);

// Prevent model overwrite during Next.js hot reloading
if (mongoose.models.Inquiry) {
  delete mongoose.models.Inquiry;
}

const Inquiry: Model<Inquiry> = mongoose.model<Inquiry>('Inquiry', InquirySchema);

export default Inquiry;
