import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error('MONGO_URL not found in .env');
  process.exit(1);
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function seed() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');

    // Create User
    const userPassword = await bcrypt.hash('password123', 12);
    const existingUser = await User.findOne({ email: 'user@example.com' });
    if (!existingUser) {
      await User.create({
        name: 'Test User',
        email: 'user@example.com',
        password: userPassword,
        role: 'user',
      });
      console.log('Test User created: user@example.com / password123');
    } else {
      console.log('Test User already exists');
    }

    // Create Admin
    const adminPassword = await bcrypt.hash('admin123', 12);
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    if (!existingAdmin) {
      await User.create({
        name: 'Admin User',
        email: 'admin@example.com',
        password: adminPassword,
        role: 'admin',
      });
      console.log('Admin User created: admin@example.com / admin123');
    } else {
      console.log('Admin User already exists');
    }

    console.log('Seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seed();
