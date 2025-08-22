import Product from '../models/productModel.js'

export const getAll = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json({ success: true, product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getOne = async (req, res) => {
    const { id }= req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json({ success: true, product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const patchOne = async (req, res) => {
    const { id }= req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});

        if(!product){
            res.status(404).json({ success: false, message: "Product not found" });
        }

        // const updatedproduct = await Product.findById(id);
        res.status(200).json({ success: true, product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteOne = async (req, res) => {
    const { id }= req.params;
    try {
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const postOne = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ success: true, product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};