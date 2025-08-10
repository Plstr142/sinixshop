const prisma = require("../config/prisma");

exports.listUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        enabled: true,
        address: true,
      },
    });

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.changeStatus = async (req, res) => {
  try {
    const { id, enabled } = req.body;
    console.log(id, enabled);
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        enabled: enabled,
      },
    });

    res.send("Update status successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.changeRole = async (req, res) => {
  try {
    const { id, role } = req.body;

    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        role: role,
      },
    });

    res.send("Update role successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.userCart = async (req, res) => {
  try {
    const { cart } = req.body;
    console.log(cart);
    console.log(req.user.id);

    const user = await prisma.user.findFirst({
      where: {
        id: Number(req.user.id),
      },
    });
    // console.log(user);

    // Deleted old cart item
    await prisma.productOnCart.deleteMany({
      where: {
        cart: { orderedById: user.id },
      },
    });

    // Deleted old cart
    await prisma.cart.deleteMany({
      where: { orderedById: user.id },
    });

    // Prepare product data
    let products = cart.map((item) => ({
      productId: item.id,
      count: item.count,
      price: item.price,
    }));

    // find summary
    let cartTotal = products.reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );

    // New Cart
    const newCart = await prisma.cart.create({
      data: {
        products: {
          create: products,
        },
        cartTotal: cartTotal,
        orderedById: user.id,
      },
    });

    console.log(newCart);

    res.send("Add Cart Ok");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getUserCart = async (req, res) => {
  try {
    res.send("Hello getusercart");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.emptyCart = async (req, res) => {
  try {
    res.send("Hello emptycart");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.saveAddress = async (req, res) => {
  try {
    res.send("Hello saveaddress");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.saveOrder = async (req, res) => {
  try {
    res.send("Hello saveorder");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getOrder = async (req, res) => {
  try {
    res.send("Hello getorder");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
