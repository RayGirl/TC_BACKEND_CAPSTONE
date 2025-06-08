import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
},
  email: {
     type: String, 
     required: true, 
     unique: true, 
     lowercase: true, 
     trim: true 
    },
  password: {
    type: String, 
    required: true
  },
  role: { 
    type: String, 
    enum: ['user','admin'], 
    default: 'student' 
},
  bio: {
    type: String, 
    default: ''
},
  isVerfied: {
    type: Boolean, 
    default:false
},
verificationToken: {
    type: String
},
resetToken:{
    type: String
},
resetTokenExpiry: {
    type: Date
},
  isActive: {
    type: Boolean, 
    default: true
}
}, { timestamps: true });	

  hooks: {
    //hash passwords
    userSchema.pre('save', async function (next) {
        if(user.changed('password')) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    });
    //compare passwords
    userSchema.methods.comparePassword= async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword,this.password);  
    };
  };
// Instance methods
// User.prototype.comparePassword = async function(userPassword) {
//   return bcrypt.compare(userPassword, this.password);
// };

//Generate email verification token
userSchema.methods.generateVerificationToken = function(){
    const token = crypto.randomBytes(32).toString('hex');
    this.verificationToken = token;
    return token;
};

//Generate password reset token
userSchema.methods.generateResetToken = function(){
    const token = crypto.randomBytes(32).toString('hex');
    this.resetToken = token;
    this.resetTokenExpiry = Date.now() + 3600000;//1 hour
    return token;
};

// ensure that when data is pulled, certain sensitive data are not sent back
// User.prototype.toJSON = function() {
//   const values = { ...this.get() };
//   delete values.password;
//   delete values.resetPasswordToken;
//   delete values.resetPasswordExpires;
//   return values;
// };
const User = mongoose.model('User', userSchema);
export default User;