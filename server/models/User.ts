import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  role: string; 
  assignedProjects: { projectId: Schema.Types.ObjectId; status: string }[];
  totalScore: number;

}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: "candidate" },
  assignedProjects: [{
    projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
    status: { type: String, enum: ['pending', 'accepted'], default: 'pending' }
  }],
  totalScore: { type: Number, default: 0 }
});

export default mongoose.model<IUser>("User", UserSchema);
