import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import projectRoutes from './routes/projectRoutes';
import assignmentRoutes from './routes/assignmentRoutes';
import authRoutes from "./routes/authRoutes";
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/assignment', assignmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



