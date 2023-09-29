import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const passhash = await bcrypt.hash(password,10)

    const newUser = new User({
      username,
      email,
      password:passhash,
    });

    const userSaved = await newUser.save();

    jwt.sign({
      id:userSaved._id,

    },
      'secret123',
      {expiresIn: "1d"},
      (err, token)=>{
        if (err) console.log(err);
        res.cookie('token',token);
        res.json({
          message: 'Usuario creado exitosamente'
        })
      }
    )

    // res.json({
    //   id: userSaved._id,
    //   username: userSaved.username,
    //   email: userSaved.email,
    //   createdAt: userSaved.createdAt,
    //   updatedAt: userSaved.updatedAt
    // }
    // )
  } catch (error) {
    console.log(error);
  }

};

export const login = (req, res) => res.send("login");
