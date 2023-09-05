// controller

// view the index.ejs
let index = (req,res) => {
    return res.render('index.ejs')
}

// create.ejs
let create = (req,res) => {
    return res.render('create.ejs')
}

// update.ejs
let edit = (req,res) => {
    return res.render('update.ejs')
}

// pnf.ejs
let pnf = (req,res) => {
    return res.render('pnf.ejs')
}

module.exports = { index, create, edit, pnf }

// api update user (patch)
let updateUser = async (req,res) => {
    try {
        let id = req.params.id

        // check if email exists
        let extEmail = await User.findOne({ email: req.body.email })
        if(extEmail)
        return res.status(400).json({ msg: `${req.body.email } aldrady exists`})

        // check if mobile number exists 
        let extMobile = await User.findOne({ mobile: req.body.mobile })
        if(extMobile)
        return res.status(200).json({ msg: `${req.body.mobile} aldready exists`})

        await User.findByIdAndUpdate({_id: id }, req.body )

        res.status(200).json({ msg: "user info updated successfully "})
    }catch(err) {
        return res.status(500).json({ msg: err.message })
    }
}

// api- delete user (delete)
let deleteUser = async (req,res) => {
    try {
        let id = req.params.id

        let extUser = await User.findById({_id: id } )
        if(extUser)
        return res.status(404).json({ msg: `Requested id not found`})

        await User.findByIdAndDelete({_id: id } )

        res.status(200).json({ msg: "user info deleted successfully "})
    }catch(err) {
        return res.status(500).json({ msg: err.message })
    }
}

