import User from "../models/User.js";

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email: email,
    password: password,
  });

  if (user) {
    return res.json({
      success: true,
      message: "User Login Successfully",
      data: user,
    });
  } else {
    return res.json({
      success: false,
      message: "Invalid Credential",
      data: null,
    });
  }
};

const postSignup = async (req, res) => {
  const { fullName, email, password, dob } = req.body;

  const user = new User({
    fullName,
    email,
    password,
    dob: new Date(dob),
  });

  try {
    const savedUser = await user.save();

    res.json({
      success: true,
      message: `Signup Successfull`,
      data: savedUser,
    });

  } catch (e) {
    res.json({
      success: false,
      message: e.message,
      data: null,
    });
  }
}

export { postLogin, postSignup };
