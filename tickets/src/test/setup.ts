import {MongoMemoryServer} from "mongodb-memory-server"
import mongoose from "mongoose"

let mongo:any

beforeAll(async() => {
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    mongoose.connect(mongoUri)
});

beforeEach(async() => {
    if (mongoose.connection.db) {
        const collections = await mongoose.connection.db.collections();
     
        for (let collection of collections) {
          await collection.deleteMany({});
        }
      }

});

afterAll(async() => {
    if (mongo) {
        await mongo.stop();
      }
      await mongoose.connection.close();
});
