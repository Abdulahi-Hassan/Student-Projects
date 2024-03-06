const { usermodel, uservalidation, loginvalidation } = require('../model/usermodel')
let jwt = require('jsonwebtoken')
const { classmodel } = require('../model/classmodel')
const bcrypt = require('bcrypt')
const { nextTick } = require('process')
const { studentmodel } = require('../model/studentmodel')
require('dotenv').config()
//getuser 

const getuser = async (req, res) => {
    try {
        const { page } = req.query
        let getUser = page ? await usermodel.find().limit(page).sort({ _id: -1, Name: 1 }) : await usermodel.find()
        res.status(200).json(getUser)

    } catch (error) {

        res.send(error.message)

    }

}

//getuserbyid 

const getuserid = async (req, res) => {

    try {
        let { id } = req.params
        let getUserId = await usermodel.findById(id);
        res.status(200).json(getUserId)


    } catch (error) {

        res.send(error.message)

    }

}

//insertuser 

const postuser = async (req, res) => {

    try {
        let { error } = uservalidation(req.body)
        if (error) return res.send(error.message)
        let EmailExist = await usermodel.findOne({ Email: req.body.Email });
        if (EmailExist) return res.status(200).json("Email is Already Exist")

        let newuser = new usermodel({
            UserName: req.body.UserName,
            Email: req.body.Email,
            Password: req.body.Password,
            Profile: req.file.filename
        })
        let salt = await bcrypt.genSalt(10);
        newuser.Password = await bcrypt.hash(newuser.Password, salt)

        let currencyuser = await newuser.save()

        res.status(201).json({
            status: "Success",
            message: "Successfully Inserted User",
            info: currencyuser
        })

    } catch (error) {

        res.send(error.message)

    }


}

//Edituser 

const putuser = async (req, res) => {
    try {

        let Edit = await usermodel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (req.body.Password) {
            let salt = await bcrypt.genSalt(10);
            Edit.Password = await bcrypt.hash(req.body.Password, salt)
        }
        let Update = await Edit.save()
        res.send({
            status: "Success",
            message: "Successfully Update Data User",
            info: Update
        })

    } catch (error) {

        res.send(error.message)

    }




}


//Removeuser 

const deleteuser = async (req, res) => {
    let { id } = req.params;
    let ClassData = await classmodel.findOne({ UserID: id })
    let StudentData = await studentmodel.findOne({ UserID: id });
    await classmodel.findByIdAndDelete(ClassData)
    await studentmodel.findByIdAndDelete(StudentData)
    let Remove = await usermodel.findByIdAndDelete(id)
    if (!Remove) return res.send('')
    res.status(200).json({
        status: "Success",
        message: "Successfully Delete Data User",
        info: Remove
    })
}


//login

const login = async (req, res) => {

    try {

        let { error } = loginvalidation(req.body)
        if (error) return res.send(error.message)
        let UserData = await usermodel.findOne({ Email: req.body.Email });
        if (!UserData) return res.send("Email or Passowrd Incorrect")
        let checkpass = await bcrypt.compare(req.body.Password, UserData.Password)
        if (!checkpass) return res.send("Email or Passowrd Incorrect");
        // const Class = await classmodel.findOne({ UserID: UserData })
        let access_token = jwt.sign({
            id: UserData._id,
            role: UserData.isAdmin
        }, process.env.token);

        const { Password, ...info } = UserData._doc

        res.json({
            status: "Success",
            message: "Succesfully Login in",
            ...info,
            access_token: access_token,
            // id: `${Class} && ${Class._id}`
        })



    } catch (error) {

        res.send(error.message)

    }



}

module.exports = { getuser, getuserid, postuser, putuser, deleteuser, login }
