const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1 Validate body
    if (!email) {
      return res.status(400).json({ message: "Email is required!" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required!" });
    }

    // Step 2 Check Email in DB already?
    const user = await prisma.user.findFirst({
      where: {
        // receive from request body
        email: email,
      },
    });

    if (user) {
      return res.status(400).json({ message: "Email already exits!" });
    }

    // Step 3 Hash Password
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);

    // Step 4 Register
    const result = await prisma.user.create({
      data: {
        email: email,
        password: hashPassword,
      },
    });

    res.send("Register Successfully!");
    console.log("Register user: ", result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1 Check Email
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user || !user.enabled) {
      return res.status(400).json({ message: "User not found or not enabled" });
    }

    // Step 2 Check Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password Invalid!" });
    }

    // Step 3 Create Payload
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    // Step 4 Generate Token
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: "160d",
      },
      (error, token) => {
        if (error) {
          return res.status(500).json({ message: "Server Error" });
        }
        // This action requires a payload containing role and token
        res.json({ payload, token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.currentUser = async (req, res) => {
  try {
    res.send("Hello current user in controller!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.currentAdmin = async (req, res) => {
  try {
    res.send("Hello current admin in controller!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
