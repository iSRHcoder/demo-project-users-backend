const express = require("express");
const router = express.Router();

const User = require("../models/users");
const currDate = new Date();
const today = currDate.toLocaleDateString("en-GB");

router.post("/adduser", async (req, res) => {
  try {
    const { email, fullName, password, address, mobileNum, education } =
      req.body.userData;
    const newuser = new User({
      email,
      fullName,
      password,
      address,
      mobileNum,
      education,
    });
    const saveuser = await newuser.save();
    res.status(200).json(saveuser);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/view-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      users: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.get("/view-users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res
        .status(400)
        .json({ status: "failed", message: "Invalid user ID" });
    }
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found" });
    }
    res.status(200).json({ status: "success", user: user });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
});

router.patch("/update-user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateuser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      users: updateuser,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.delete("/view-users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteuser = await User.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      users: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;
