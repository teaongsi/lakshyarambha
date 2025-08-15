import User from '../models/userModel.js';

export const postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if( email === "" || password === "" ) {
            res.status(400).json({ success: false, message: "Email and password are required" });
            return;
        }

        const user = await User.create({
            name,
            email,
            password,
        })
        // const user = await User.create({
        // name: "tong",
        // email: "hello@dev.com",
        // password: "tongtong"
        // })

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getUserByEmail = async (req, res) => {
    const { email } = req.query;

    try {
        const user = await User.find({ 
            email
        }).select("-password");
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const patchUser = async (req, res) => {
    const { email } = req.query;
    const { name } = req.body;

    try {
        const user = await User.findOneAndUpdate(
            { email },
            { name },
            { new: true, runValidators: true }
        ).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const delUser = async (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ success: false, message: "Email is required" });
    }

    try {
        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};