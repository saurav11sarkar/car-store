import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  URL: process.env.DB_URL || 'mongodb://localhost:27017/car-store',
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV,
};
