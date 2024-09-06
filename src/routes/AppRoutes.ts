import { Router } from "express";

const appRoutes = Router();

appRoutes.post("/upload/file/forms/WEB", (req, res) => {
  res.json({
    fileName: "c120348d-510a-4fad-b056-6a377af961db.pdf",
    url: "https://surone-formvinculacion-dev.s3.us-west-2.amazonaws.com/dev/personas-naturales/20240906092745.pdf",
    s3Key: "dev/personas-naturales/20240906092745.pdf",
  });
});

export default appRoutes;
