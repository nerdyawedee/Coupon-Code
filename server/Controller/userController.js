import User from "../Model/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../Utis/error.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !password || !confirmPassword) {
    return next(errorHandler(400, "All fields are required"));
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    return next(errorHandler(400, "Passwords do not match"));
  }

  try {
   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "Email is already in use"));
    }

   
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      confirmpassword:hashedPassword
    });

   
    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

   
    const { password: pass, ...rest } = newUser._doc;
    res.status(201).json({ ...rest, token });

  } catch (error) {
    next(error);
  }
};


export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );
    console.log("Signin Token", token);
    const { password: pass, ...rest } = validUser._doc;

    res.status(200).json({ ...rest, token });
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = user._doc;
      res.status(200).json({ ...rest, token });
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        name:
        name
        ? name.toLowerCase().split(" ").join("") + Math.random().toString(9).slice(-4)
        : `user_${Math.random().toString(36).slice(-8)}`,
        email,
        password: hashedPassword,
        confirmpassword:hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: _id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = newUser._doc;
      res.status(200).json({ ...rest, token });
    }
  } catch (error) {
    next(error);
  }
};
  export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId); 
      if (!user) {
        return next(errorHandler(404, "User not found"));
      }
  
      const { password, ...rest } = user._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };