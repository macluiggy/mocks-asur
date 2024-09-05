interface SubActividadEconomica {
  label: string;
  value: {
    Description: string | null;
    CodigoSiaerp: string | null;
    CodigoZoho: null;
    CodigoVT: null;
    CodigoPadre: string | null;
    Abreviado: null;
    Nivel: number;
    NivelFinal: string | null;
    label: string | null;
    value: string | null;
  };
}

interface SubActividadEconomicas {
  [key: string]: SubActividadEconomica[];
}
const subActividadEconomicas: SubActividadEconomicas = {
  ANC: [
    {
      label: "AMA DE CASA",
      value: {
        Description: "HOUSEWIFE",
        CodigoSiaerp: "831",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "ANC",
        Abreviado: null,
        Nivel: 2,
        NivelFinal: "Y",
        label: "AMA DE CASA",
        value: "ANC3",
      },
    },
    {
      label: "ESTUDIANTE",
      value: {
        Description: "STUDENT",
        CodigoSiaerp: "830",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "ANC",
        Abreviado: null,
        Nivel: 2,
        NivelFinal: "Y",
        label: "ESTUDIANTE",
        value: "ANC2",
      },
    },
    {
      label: "JUBILADO",
      value: {
        Description: "RETIRED",
        CodigoSiaerp: "829",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "ANC",
        Abreviado: null,
        Nivel: 2,
        NivelFinal: "Y",
        label: "JUBILADO",
        value: "ANC1",
      },
    },
  ],
  "041": [
    {
      label: "ACTIVIDADES INMOBILIARIAS",
      value: {
        Description: "REAL ESTATE ACTIVITIES",
        CodigoSiaerp: null,
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "041",
        Abreviado: null,
        Nivel: 2,
        NivelFinal: "N",
        label: "ACTIVIDADES INMOBILIARIAS",
        value: "041001",
      },
    },
  ],
};

export { subActividadEconomicas };
