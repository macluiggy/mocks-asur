import { Router } from "express";

const catalogoRouter = Router();


catalogoRouter.get("/all", (req, res) => {
  res.json({ message: "Catalogo" });
});

export default catalogoRouter;
