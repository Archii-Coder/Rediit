const { Router } = require("express");
const {
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  createPost,
} = require("../controllers/post.controller");
const postValidationSchema = require("../validations/post.validation");
const {
  validateQuery,
  validateBody,
} = require("../middleware/validation.middleware");

const postRouter = Router();

postRouter.post("/", validateBody(postValidationSchema.create), createPost);
postRouter.get("/", validateQuery(postValidationSchema.search), getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.put(
  "/:id",
  validateBody(postValidationSchema.update),
  updatePostById
);
postRouter.delete("/:id", deletePostById);

module.exports = postRouter;
