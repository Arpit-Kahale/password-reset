const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    return res.status(200).json({
      message: "Backend working fine ✔"
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

module.exports = { forgotPassword };