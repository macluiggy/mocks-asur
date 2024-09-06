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
FvcRoutes.get("/completed/66db0f5b16529634dd077968/forms/WEB", (req, res) => {
  res.json({
    fv: {
      codigo: "formulario-vinculacion",
      to: "vg.victorguillen20@gmail.com",
      keyFileS3:
        "dev/formulario-vinculacion/66db0f5b16529634dd077968_20240906093904.pdf",
      url: "https://surone-formvinculacion-dev.s3.us-west-2.amazonaws.com/dev/formulario-vinculacion/66db0f5b16529634dd077968_20240906093904.pdf",
      orden: 1,
      send: false,
      presignedUrl:
        "https://surone-formvinculacion-dev.s3.us-west-2.amazonaws.com/dev/formulario-vinculacion/66db0f5b16529634dd077968_20240906093904.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAW3WSMUD64INSYEP5%2F20240906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240906T143904Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=2fc16f5f653c197f5dda8b0433a188366ba4e7b6539220e0b7d3b2e95fb4623d",
    },
    tramaArmada: {
      Msg: "Ok",
      Data: {
        IdFvc: "66d8e0db9f06b1dc14303fa0",
        SavedDb: true,
        SentKafka: true,
        SavedAttachments: true,
        IdsDocumentosAdjuntos: ["66d8e0dd23149d5c84e4e794"],
      },
      Errors: [],
      IsSuccess: true,
      fechaConsulta: "2024-09-06 09:39:12",
    },
    guardoDocuware: {
      integroDocuware: true,
    },
  });
});
FvcRoutes.get("change-this", (req, res) => {
  res.json();
});
FvcRoutes.get("change-this", (req, res) => {
  res.json();
});

export default FvcRoutes;
