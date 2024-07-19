const User = require("../models/User");
const bcrypt = require("bcrypt");

const HashPassword = (password) => {
  return password.replace(/./g, "*");
};

module.exports.registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      contactEmail,
      password,
      birthDate,
      contactPhone,
      isAdmin,
    } = req.body;

    const existingUser = await User.findOne({
      contactEmail,
    });

    if (existingUser) {
      res.send("User already exists");
    } else {
      const newUser = new User({
        firstName,
        lastName,
        contactEmail,
        password: bcrypt.hashSync(req.body.password, 10),
        birthDate,
        contactPhone,
        isAdmin,
      });

      const savedUser = await newUser.save();

      res.send({
        savedUser: {
          password: HashPassword(password),
        },
      });
    }
  } catch (error) {
    res.send({ message: "Error" + error });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();

    if (getUsers.length > 0) {
      res.send({ message: getUsers });
    } else {
      res.send({ message: "No users in the database" });
    }
  } catch (error) {
    res.send("Error" + error);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);

    if (getUser) {
      res.send({ getUser });
    } else {
      res.send({ message: "No user found" });
    }
  } catch (error) {
    res.send({ message: "Error " + error });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { contactEmail, password } = req.body;
    const loggedUser = await User.findOne({ contactEmail });

    if (!loggedUser) {
      res.send({ message: "No user exists" });
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        password,
        loggedUser.password
      );

      if (isPasswordCorrect) {
        return res.send({ access: "Access Granted" });
      } else {
        return res.send({ access: "Access Denied" });
      }
    }
  } catch (error) {
    res.send({ message: "Error" + error });
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    req.session.destroy();
    res.send("Successfully Logged Out");
  } catch (error) {
    res.send({ message: error });
  }
};
