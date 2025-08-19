import express from 'express';
import { getOne, getAll, postOne, patchOne, deleteOne } from '../controllers/productController.js';

const router = express.Router();

router.route("/").get(getAll);
router.route("/:id").get(getOne);
router.route("/").post(postOne);
router.route("/:id").put(patchOne);
router.route("/:id").delete(deleteOne);

export default router;