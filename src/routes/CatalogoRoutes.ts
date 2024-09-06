import { Router } from "express";
import {
  detalleActividadEconomica,
  subActividadEconomicas,
  catalogoDuenoCorreoPnFormsWeb,
  optionsTipoDocumentoFormsWeb,
  listNacionalidadFormsWeb,
  listGeneroFormsWeb,
  listEstadoCivilFormsWeb,
  listProfesionFormsWeb,
  listCantonFormsWeb,
  listProviciasFormsWeb,
  optionsTipoPersonaFormsWeb,
  empresaLanguagesFormsWeb,
  optionsBrokersFormsWeb,
  actividadEconomicaFormsWeb,
  listRamoFormsWeb,
  canalCanalVinculacionFormsWeb,
  listFormaPagoPrimaFormsWeb,
} from "./common/catalogo-responses";

const catalogoRouter = Router();

catalogoRouter.get("/options/tipo-documento/forms/WEB", (req, res) => {
  res.json(optionsTipoDocumentoFormsWeb);
});

catalogoRouter.get("/catalogo-dueno-correo-pn/forms/WEB", (req, res) => {
  res.json(catalogoDuenoCorreoPnFormsWeb);
});

catalogoRouter.get("/list/nacionalidad/forms/WEB", (req, res) => {
  res.json(listNacionalidadFormsWeb);
});

catalogoRouter.get("/list/genero/forms/WEB", (req, res) => {
  res.json(listGeneroFormsWeb);
});

catalogoRouter.get("/list/estado-civil/forms/WEB", (req, res) => {
  res.json(listEstadoCivilFormsWeb);
});

catalogoRouter.get("/list/profesion/forms/WEB", (req, res) => {
  res.json(listProfesionFormsWeb);
});
catalogoRouter.get("/list/canton/forms/WEB", (req, res) => {
  res.json(listCantonFormsWeb);
});
catalogoRouter.get("/list/provincias/forms/WEB", (req, res) => {
  res.json(listProviciasFormsWeb);
});
catalogoRouter.get("/options/tipo-persona/forms/WEB", (req, res) => {
  res.json(optionsTipoPersonaFormsWeb);
});
catalogoRouter.get("/empresa/languages/forms/WEB", (req, res) => {
  res.json(empresaLanguagesFormsWeb);
});
catalogoRouter.get("/options/brokers/forms/WEB", (req, res) => {
  res.json(optionsBrokersFormsWeb);
});
catalogoRouter.get("/actividad-economica/forms/WEB", (req, res) => {
  res.json(actividadEconomicaFormsWeb);
});
catalogoRouter.get(
  "/sub-actividad-economica/:subActividad/forms/WEB",
  (req, res) => {
    const { subActividad } = req.params;
    res.json(subActividadEconomicas[subActividad]);
  }
);
catalogoRouter.get(
  "/detalle-actividad-economica/:detalleActividad/forms/WEB",
  (req, res) => {
    const { detalleActividad } = req.params;

    res.json(detalleActividadEconomica[detalleActividad] || []);
  }
);
catalogoRouter.get("/list/ramo/forms/WEB", (req, res) => {
  res.json(listRamoFormsWeb);
});
catalogoRouter.get("/canal/canal-vinculacion/forms/WEB", (req, res) => {
  res.json(canalCanalVinculacionFormsWeb);
});
catalogoRouter.get("/list/forma-pago-prima/forms/WEB", (req, res) => {
  res.json(listFormaPagoPrimaFormsWeb);
});
catalogoRouter.get("change-this", (req, res) => {
  res.json();
});
catalogoRouter.get("change-this", (req, res) => {
  res.json();
});
catalogoRouter.get("change-this", (req, res) => {
  res.json();
});
catalogoRouter.get("change-this", (req, res) => {
  res.json();
});
export default catalogoRouter;
