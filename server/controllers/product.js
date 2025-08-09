const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  try {
    const { title, description, price, quantity, categoryId, images } =
      req.body;
    // console.log(title, description, price, quantity, images);
    const product = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        images: {
          create: images.map((item) => ({
            asset_id: item.asset_id,
            public_id: item.public_id,
            url: item.url,
            secure_url: item.secure_url,
          })),
        },
      },
    });

    // console.log(product);
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.list = async (req, res) => {
  try {
    const { count } = req.params;
    // console.log(count);
    // console.log(typeof count);

    const products = await prisma.product.findMany({
      take: parseInt(count),
      orderBy: { createdAt: "desc" },
      // similary table join
      include: {
        category: true,
        images: true,
      },
    });

    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.update = async (req, res) => {
  try {
    res.send("Hello update product successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    // difficult *****

    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    res.send("Deleted product successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.listby = async (req, res) => {
  try {
    res.send("Hello listby product successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.searchFilters = async (req, res) => {
  try {
    res.send("Hello searchfilters product successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
