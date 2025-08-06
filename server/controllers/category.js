exports.create = async (req, res) => {
  try {
    res.send("Hello category");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.list = async (req, res) => {
  try {
    res.send("Hello list category");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    res.send("Hello delete category");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
