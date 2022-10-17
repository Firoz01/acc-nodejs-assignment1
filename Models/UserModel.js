const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    Id: {
      type: String,
      required: [true, "Id can't be empty! Please provide id"],
    },
    gender: {
      type: String,
      required: [
        true,
        "gender can't be empty! Please provide gender in a string male or female",
      ],
    },
    name: {
      type: String,
      required: [true, "name field can't not be empty! Please provide Name"],
    },
    contact: {
      type: String,
      required: [
        true,
        "contract field can't not be empty! Please provide contact",
      ],
    },
    address: {
      type: String,
      required: [
        true,
        "address field can't not be empty! Please provide address",
      ],
    },

    photoUrl: {
      type: String,
      required: [
        true,
        "photoUrl field can't not be empty! Please provide photoUrl",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
