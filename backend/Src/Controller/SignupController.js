
const Signup= require('../Model/SignupModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser=async(req,res)=>{
try {
  const existingUser = await Signup.findOne({
    where: { email: req.body.email }
  });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const student = await Signup.create({
    ...req.body,
    password: hashedPassword
  });

  res.status(201).json({
    success: true,
    data: student
  });

} catch (error) {
  res.status(500).json({
    success: false,
    message: error.message
  });
}
}

exports.CheckLogin = async (req, res) => {
  try {

    // 1. get email & password
    const { email, password } = req.body;

    // 2. find user by email
    const user = await Signup.findOne({
      where: { email }
    });

    // 3. if user not found
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // 4. compare password
    const isMatch = await bcrypt.compare(password, user.password);

    // 5. if password wrong
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
  { id: user.id, email: user.email }, // payload
  "mysecretkey",                      // secret key
  { expiresIn: "1h" }                 // expiry
);

    // 6. success
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
      token:token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};