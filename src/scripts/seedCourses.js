const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course.js'); // Adjust path as needed
	
dotenv.config();

const sampleCourses = [
  {
    title: 'Sketching a basic fashion figure',
    description: 'A basic introduction to beginners fashion drawing.',
    videos: [
      { title: 'Basic Fashion Figure Drawing', url: 'https://youtube.com/shorts/rKO9TInyHqY?si=8vTDtEtMu0WVK9B0' },
      { title: 'Fashion designing for beginners', url:'https://youtube.com/shorts/dxJxGDFw9DY?si=QmC0Csdbbler1WIa' },
      { title: 'Technique for fashion sketching', url: 'https://youtube.com/shorts/eGZhfH1Q4ds?si=ppNATN1zykN3AxVE' },
    ], 
    ],
    pdfs: [
      { title: 'Figure Drawing Techniques', url: 'https://dokumen.pub/download/how-to-draw-fashion-figure-essential-figure-drawing-techniques-for-womens-wear-designers-fashion-croquis-books-0984356045-9780984356041.html' },
       { title: 'Fashion drawing', url: 'https://dokumen.pub/download/fashion-drawing-2940411158-9782940411153.html'}
    ],
  },
  {
    title: 'How to learn about fashion history and designers',
    description: 'How to gain more knowledge about fashion designers, history and the industry in general.',
    videos: [
      { title: 'Learning about fashion history', url: 'https://youtube.com/shorts/XYE3AjX3TyY?si=2qAT8BlDgFwEzb_9' },
    ],
  },
];
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Course.deleteMany();
await Course.insertMany(sampleCourses);
    console.log('Courses seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
