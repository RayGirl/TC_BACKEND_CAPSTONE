import dotenv from 'dotenv';
// Load environment variables
dotenv.config();
console.log('MongoDB URI:',process.env.MONGO_URI);
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger.js';
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import path from 'path';
//import externalApiRoutes from './routes/externalApiRoutes.js';
// errorHandler from './middleware/errorHandler.js';



//Connect to MongoDB
//connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

app.use('/api/upload', uploadRoutes);

// Make uploads folder publicly accessible
app.use('/uploads', express.static(path.join(process.cwd(), '/uploads')));
//app.use('/api/external', externalApiRoutes);

// Error handling
//app.use(errorHandler);

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

//MongoDB Connection
 //mongoose.connect(process.env.MONGO_URI)
  //.then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Start listening
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();