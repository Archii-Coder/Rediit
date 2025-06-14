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
  validateObjectId,
} = require("../middleware/validation.middleware");

const postRouter = Router();

postRouter.post("/", validateBody(postValidationSchema.create), createPost);
postRouter.get("/", validateQuery(postValidationSchema.search), getAllPosts);
postRouter.get("/:id", validateObjectId("id"), getPostById);
postRouter.put(
  "/:id",
  validateObjectId("id"),
  validateBody(postValidationSchema.update),
  updatePostById
);
postRouter.delete("/:id", validateObjectId("id"), deletePostById);

module.exports = postRouter;
