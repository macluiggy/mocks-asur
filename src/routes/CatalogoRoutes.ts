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
import { responseHandler } from "@src/util/misc";

const catalogoRouter = Router();

catalogoRouter.get("/options/tipo-documento/forms/WEB", (req, res) => {
  responseHandler(res, optionsTipoDocumentoFormsWeb);
});

catalogoRouter.get("/catalogo-dueno-correo-pn/forms/WEB", (req, res) => {
  responseHandler(res, catalogoDuenoCorreoPnFormsWeb);
});

catalogoRouter.get("/list/nacionalidad/forms/WEB", (req, res) => {
  responseHandler(res, listNacionalidadFormsWeb);
});

catalogoRouter.get("/list/genero/forms/WEB", (req, res) => {
  responseHandler(res, listGeneroFormsWeb);
});

catalogoRouter.get("/list/estado-civil/forms/WEB", (req, res) => {
  responseHandler(res, listEstadoCivilFormsWeb);
});

catalogoRouter.get("/list/profesion/forms/WEB", (req, res) => {
  responseHandler(res, listProfesionFormsWeb);
});
catalogoRouter.get("/list/canton/forms/WEB", (req, res) => {
  responseHandler(res, listCantonFormsWeb);
});
catalogoRouter.get("/list/provincias/forms/WEB", (req, res) => {
  responseHandler(res, listProviciasFormsWeb);
});
catalogoRouter.get("/options/tipo-persona/forms/WEB", (req, res) => {
  responseHandler(res, optionsTipoPersonaFormsWeb);
});
catalogoRouter.get("/empresa/languages/forms/WEB", (req, res) => {
  responseHandler(res, empresaLanguagesFormsWeb);
});
catalogoRouter.get("/options/brokers/forms/WEB", (req, res) => {
  responseHandler(res, optionsBrokersFormsWeb);
});
catalogoRouter.get("/actividad-economica/forms/WEB", (req, res) => {
  responseHandler(res, actividadEconomicaFormsWeb);
});
catalogoRouter.get(
  "/sub-actividad-economica/:subActividad/forms/WEB",
  (req, res) => {
    const { subActividad } = req.params;
    responseHandler(res, subActividadEconomicas[subActividad]);
  }
);
catalogoRouter.get(
  "/detalle-actividad-economica/:detalleActividad/forms/WEB",
  (req, res) => {
    const { detalleActividad } = req.params;

    responseHandler(res, detalleActividadEconomica[detalleActividad] || []);
  }
);
catalogoRouter.get("/list/ramo/forms/WEB", (req, res) => {
  responseHandler(res, listRamoFormsWeb);
});
catalogoRouter.get("/canal/canal-vinculacion/forms/WEB", (req, res) => {
  responseHandler(res, canalCanalVinculacionFormsWeb);
});
catalogoRouter.get("/list/forma-pago-prima/forms/WEB", (req, res) => {
  responseHandler(res, listFormaPagoPrimaFormsWeb);
});
// catalogoRouter.get("change-this", (req, res) => {
//   responseHandler(res, );
// });
export default catalogoRouter;
