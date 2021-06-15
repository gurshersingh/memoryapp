import express from 'express';
import {getPost, createPosts} from '../controller/post.js'

const router = express.Router();

router.get('/', getPost);
router.post('/', createPosts);

export default router;