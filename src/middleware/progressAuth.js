const Progress = require('..models/Progress.js');
const authorizeProgressAccess = async (req, res, next) => {
    try{const progress = await Progress.findById(req.params.id);
        if (!progress) {
            return res.status(404).json({message: 'Progress not found'});
        }
        if (progress.user.toString() !==req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to access this progress data'});
        }
        req.progress = progress;
    next();
} catch (error) {
    res.status(500).json({message:'Server error'});
}
 };

 module.exports = authorizeProgressAccess;