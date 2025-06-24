import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';
	
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'fashionTube_courses',
    resource_type: 'auto', // can be 'auto' for mixed uploads
    allowed_formats: ['mp4', 'mov', 'pdf']
  }
});

const upload = multer({ storage });

export default upload;
