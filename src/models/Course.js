import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videos: [
      {
        title: String,
        url: { type: String, required: true },
        duration: String,
      },
    ],
    materials: [
      {
        title: String,
        fileUrl: { type: String, required: true },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);

export default Course;
