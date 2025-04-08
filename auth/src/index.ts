import app from "./app";
import { dbInitialized } from "./config/database";

const PORT = process.env.PORT || 3000;


dbInitialized();
app.listen(PORT,() => {
  console.log(`Auth service is running on port ${PORT}`);
});



