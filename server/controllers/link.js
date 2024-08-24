import Link from "../models/Link.js";
import User from "../models/User.js";

const postLink = async (req, res) => {
  const { target, slug, title, user } = req.body;

  const link = new Link({
    target,
    slug,
    title,
    user,
  });

  try {
    const savedLink = await link.save();

    res.json({
      success: true,
      message: "Link Added Successfully",
      data: savedLink,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
      data: null,
    });
  }
};

const getSlugRedirect = async (req, res) => {
  const { slug } = req.params;

  const link = await Link.findOne({ slug });

  if (!link) {
    return res.status(404).json({
      success: true,
      message: "Link not found",
    });
  }

  link.views = link.views + 1;
  await link.save();

  res.redirect(link.target);
};

const getLinks = async (req, res) => {
  const { userId } = req.query;

  const user = await User.findById(userId);

  if (!user) {
    return res.json({
      success: false,
      message: `User not found`,
      data: null,
    });
  }

  const links = await Link.find({ user: userId }).sort({ createdAt: -1 });

  res.json({
    success: true,
    message: "User fetched successfully",
    data: links,
  });
};

export { postLink, getSlugRedirect, getLinks };
