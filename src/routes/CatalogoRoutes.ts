import { Router } from "express";

const catalogoRouter = Router();

catalogoRouter.get("/options/tipo-documento/forms/WEB", (req, res) => {
  res.json([
    {
      label: "Cédula",
      "label-En": "Identification card",
      "label-Es": "Cédula",
      value: "cedula",
    },
    {
      label: "RUC",
      "label-En": "RUC",
      "label-Es": "RUC",
      value: "ruc",
    },
    {
      label: "Pasaporte",
      "label-En": "Passport",
      "label-Es": "Pasaporte",
      value: "pasaporte",
    },
  ]);
});

export default catalogoRouter;
