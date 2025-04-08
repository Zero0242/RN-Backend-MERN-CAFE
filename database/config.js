const mongoose = require('mongoose');
const { Role } = require('../models');



const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}

const setupDefaultRoles = async () => {
    const results = await Role.find()
    const isEmpty = results.length < 1;
    if (isEmpty) {
        const adminRol = new Role({ rol: 'ADMIN_ROLE' })
        const userRol = new Role({ rol: 'USER_ROLE' })
        await adminRol.save()
        await userRol.save()
    }
    console.log('ROLES ENABLED')
}




module.exports = {
    dbConnection,
    setupDefaultRoles,
}
