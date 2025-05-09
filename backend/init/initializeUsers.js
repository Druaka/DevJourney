const mongoose = require('mongoose');
const User = require('../schema/user.js');

async function initializeUsers() {
    const initialUsers = [
        {name: 'John Doe', email: 'john@example.com', password: 'password123'},
        {name: 'Jane Smith', email: 'jane@example.com', password: 'password456'}
    ];

    for (const user of initialUsers) {
        const existingUser = await User.findOne({email: user.email});
        if (!existingUser) {
            await User.create(user);
            console.log(`Inserted user: ${user.email}`);
        } else {
            console.log(`User already exists: ${user.email}`);
        }
    }
}

module.exports = initializeUsers;
