import mongoose from 'mongoose';

// User schema definition
const userSchema = new mongoose.Schema({
username: {
type: String,
required: true,
unique: true
},
password: {
type: String,
required: true
}
}, { timestamps: true });

// Exporting the model
const User = mongoose.model('User', userSchema);

export default User;