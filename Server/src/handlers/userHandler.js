const ControlUser = require("../Controller/userController");

const getAllUsers = (req, res) => {
  try {
    const data = ControlUser.getAllUsers();
    res.status(200).json({ status: "ok", data });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const getOneUser = (req, res) => {
  try {
    const id = req.params.id;
    const data = ControlUser.getOneUser(id);
    res.status(200).json({ status: "ok", data });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const postNewUser = (req, res) => {
  try {
    const estado = ControlUser.postNewUser({ ...req.body });
    res.status(301).json(estado);
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const deleteUser = (req, res) => {
  try {
    const estado = ControlUser.deleteUser(req.params.id);
    res.status(200).json({
      status: "ok",
      message: estado.message,
      User: estado.UserDelete,
    });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const putUpdateUser = (req, res) => {
  try {
    const status = ControlUser.putUdateUser(req.params.id, req.body.password);
    res.status(301).json({
      status: "ok",
      message: status.message,
      UserPrevius: status.userPrevious,
      UserNext: status.userNext,
    });
  } catch (error) {
    res.status(404).send({ status: "error", error: error.message });
  }
};

const postUserExistsInDB = (req, res) => {
  try {
    const status = ControlUser.userExistsInDB(
      req.body.usuario,
      req.body.password
    );
    res.status(200).send(status);
  } catch (error) {
    res.status(404).send({ status: "err", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  postNewUser,
  deleteUser,
  putUpdateUser,
  postUserExistsInDB,
};
