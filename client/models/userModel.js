import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash if the password is new or modified

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;