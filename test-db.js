require('dotenv').config();

const dns = require('dns');

// Use Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');

async function testConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 15000
        });

        console.log('MongoDB Atlas Connected Successfully!');

        await mongoose.disconnect();

    } catch (error) {
        console.log('Connection Failed!');
        console.log(error);
    }
}

testConnection();