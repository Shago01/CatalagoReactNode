const DATAUSER = require("../Database/DATAUSER.json");
const { generarID, saveDB } = require("../utils/utils").default;

const getAllUsers = () => {
    const DB = DATAUSER;

    try {
        const users = DB.users.map((user) => {
            return {
                id: user.id,
                usuario: user.usuario,
            };
        });
        return { users: users };
    } catch (error) {
        throw error;
    }
};

const getOneUser = (id) => {
    const DB = DATAUSER;
    try {
        if (!/^[0-9A-Za-z]+$/.test(id)) throw Error("id incorrecto");

        const user = DB.users.find((e) => e.id == id);
        if (!user) throw Error("El Usuario no existe");

        delete user.password;
        return user;
    } catch (error) {
        throw error;
    }
};

const postNewUser = (data) => {
    const DB = DATAUSER;
    try {
        const userNew = { ...data, id: generarID() };

        const isNewUser = DB.users.find(
            (user) => user.usuario.toLowerCase() == userNew.usuario.toLowerCase()
        );

        if (isNewUser) throw Error("El Usuario ya exite");

        DB.users.push(userNew);
        saveDB(DB, "DATAUSER");

        const status = {
            message: "El Usuario se ha agregado satisfactoriamente.",
            userNew,
        };

        return status;
    } catch (error) {
        throw error;
    }
};

const putUdateUser = (id, user) => {
    const DB = DATAUSER;
    try {
        const positionUser = DB.users.findIndex((e) => id == e.id);

        const [userPrevious] = DB.users.splice(positionUser, 1);
        const userNext = { ...userPrevious, password: user };

        DB.users.push(userNext);
        saveDB(DB, "DATAUSER");

        const status = {
            message: "El Usuario se ha actualizado satisfactoriamente.",
            userPrevious,
            userNext,
        };

        return status;
    } catch (error) {
        throw error;
    }
};

const deleteUser = (id) => {
    try {
        if (!(DB.users.length > 1))
            throw Error(" No se puede dejar sin Usuarios la APP");

        const positionUser = DB.users.findIndex((e) => id == e.id);

        if (!(positionUser > -1)) throw Error("El usuario no exite");

        const [UserDelete] = DB.users.splice(positionUser, 1);

        saveDB(DB, "DATAUSER");

        const status = {
            message: "El usuario ha sido eliminado satisfactoriamente.",
            UserDelete,
        };
        return status;
    } catch (error) {
        throw error;
    }
};

const userExistsInDB = (name, password) => {
    const DB = DATAUSER;

    try {
        if (!(DB.users.findIndex((e) => e.usuario == name) > -1))
            throw Error("el Usuario o Contraseña son incorrectos");
        if (!(DB.users.findIndex((e) => e.password == password) > -1))
            throw Error("el Usuario o Contraseña son incorrectos");
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    postNewUser,
    putUdateUser,
    deleteUser,
    userExistsInDB,
};
