import mongoose from 'mongoose';
import config from './config';
import app from './app';

async function server() {
  try {
    await mongoose.connect(config.URL);
    app.listen(config.PORT, () => {
      console.log(`Server is running 🏃‍♂️‍➡️ http://localhost:${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
