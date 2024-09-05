import { Router } from "express";

const FvcRoutes = Router();

FvcRoutes.get("/", (req, res) => {
  res.send("FVC");
});

FvcRoutes.post("/save/forms/WEB", (req, res) => {
  res.json({
    id: "66da026ad62968aa840b324a",
    lastSection: "idioma",
    sections: {
      idioma: true,
    },
    data: {
      idioma: {
        section: "idioma",
        lenguaje: {
          label: "Español",
          value: "es",
          labelEn: "Spanish",
        },
      },
    },
    meta: {
      ip: "172.31.5.4",
      browser:
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
      referrer: "https://modulos-mb-dev.surup.xyz/",
      disabled: {
        actividadEconomica: [
          "totalIngresosCalculado",
          "totalPatrimonioCalculado",
        ],
        datosEmpresa: ["totalPatrimonioCalculado"],
        datosPersonales: ["edadCalculada"],
      },
      lang: "es",
    },
  });
});
FvcRoutes.get("change-this", (req, res) => {
  res.json();
});
FvcRoutes.get("change-this", (req, res) => {
  res.json();
});
FvcRoutes.get("change-this", (req, res) => {
  res.json();
});
FvcRoutes.get("change-this", (req, res) => {
  res.json();
});
FvcRoutes.get("change-this", (req, res) => {
  res.json();
});

export default FvcRoutes;
