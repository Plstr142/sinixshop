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

    console.log(email, password);

    res.send("Hello register in controller successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    res.send("Hello login in controller successfully!");
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
