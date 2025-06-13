const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videos: [
      {
        title: String,
        url: { type: String, required: true },
        duration: String
      }
    ],
    materials: [
      {
        title: String,
        fileUrl: { type: String, required: true } // URL to the PDF file
      }
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);
