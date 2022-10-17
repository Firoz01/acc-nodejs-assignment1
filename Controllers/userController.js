const UserModel = require('../Models/UserModel');

exports.randomUser = () => {
  console.log('hello! api hitted for random user');
};

exports.allUser = async (req, res) => {
  console.log('hello! api hitted for all users');

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.saveUser = async (req, res) => {
  const data = req.body;
  try {
    const newUser = new UserModel(data);

    const result = newUser.save();
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = () => {
  console.log('hello! api hitted for update user');
};
exports.bulkUpdateUser = () => {
  console.log('hello! api hitted for bulk update');
};
exports.deleteUser = () => {
  console.log('hello! api hitted for delete user');
};
