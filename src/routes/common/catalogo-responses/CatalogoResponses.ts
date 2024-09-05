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
  "042": [
    {
      label: "ACTIVIDADES PROFESIONALES, TECNICAS Y ADMINISTRATIVAS",
      value: {
        Description: "PROFESSIONAL, TECHNICAL, AND ADMINISTRATIVE ACTIVITIES",
        CodigoSiaerp: null,
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042",
        Abreviado: null,
        Nivel: 2,
        NivelFinal: "N",
        label: "ACTIVIDADES PROFESIONALES, TECNICAS Y ADMINISTRATIVAS",
        value: "042001",
      },
    },
  ],
};

const detalleActividadEconomica: SubActividadEconomicas = {
  "042001": [
    {
      label: "ACTIVIDADES DE ADMINISTRACION DE EMPRESAS Y CONSULTORIA",
      value: {
        Description: "BUSINESS ADMINISTRATION AND CONSULTING ACTIVITIES",
        CodigoSiaerp: "775",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "ACTIVIDADES DE ADMINISTRACION DE EMPRESAS Y CONSULTORIA",
        value: "042001003",
      },
    },
    {
      label: "ACTIVIDADES DE AGENCIAS DE EMPLEO",
      value: {
        Description: "EMPLOYMENT AGENCY ACTIVITIES",
        CodigoSiaerp: "611",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "ACTIVIDADES DE AGENCIAS DE EMPLEO",
        value: "042001011",
      },
    },
    {
      label:
        "ACTIVIDADES DE AGENCIAS DE VIAJES, OPERADORES TURISTICOS Y SERVICIOS DE RESERVA ",
      value: {
        Description:
          "ACTIVITIES OF TRAVEL AGENCIES, TOUR OPERATORS, AND RESERVATION SERVICES",
        CodigoSiaerp: "615",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label:
          "ACTIVIDADES DE AGENCIAS DE VIAJES, OPERADORES TURISTICOS Y SERVICIOS DE RESERVA ",
        value: "042001015",
      },
    },
    {
      label: "ACTIVIDADES DE ALQUILER Y ARRENDAMIENTO (EXCEPTO INMOBILIARIAS)",
      value: {
        Description: "RENTAL AND LEASING ACTIVITIES (EXCEPT REAL ESTATE)",
        CodigoSiaerp: "614",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label:
          "ACTIVIDADES DE ALQUILER Y ARRENDAMIENTO (EXCEPTO INMOBILIARIAS)",
        value: "042001014",
      },
    },
    {
      label: "ACTIVIDADES DE ARQUITECTURA E INGENIERIA",
      value: {
        Description: "ARCHITECTURAL AND ENGINEERING ACTIVITIES",
        CodigoSiaerp: "776",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "ACTIVIDADES DE ARQUITECTURA E INGENIERIA",
        value: "042001004",
      },
    },
    {
      label: "ACTIVIDADES DE SEGURIDAD E INVESTIGACION",
      value: {
        Description: "SECURITY AND INVESTIGATION ACTIVITIES",
        CodigoSiaerp: "612",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "ACTIVIDADES DE SEGURIDAD E INVESTIGACION",
        value: "042001012",
      },
    },
    {
      label: "ACTIVIDADES DE SERVICIOS A EDIFICIOS Y PAISAJES",
      value: {
        Description: "FACILITY AND LANDSCAPE SERVICES ACTIVITIES",
        CodigoSiaerp: "613",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "ACTIVIDADES DE SERVICIOS A EDIFICIOS Y PAISAJES",
        value: "042001013",
      },
    },
    {
      label: "ACTIVIDADES JURIDICAS Y DE CONTABILIDAD",
      value: {
        Description: "LEGAL AND ACCOUNTING ACTIVITIES",
        CodigoSiaerp: "774",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "ACTIVIDADES JURIDICAS Y DE CONTABILIDAD",
        value: "042001002",
      },
    },
    {
      label: "ACTIVIDADES VETERINARIAS",
      value: {
        Description: "VETERINARY ACTIVITIES",
        CodigoSiaerp: "779",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "ACTIVIDADES VETERINARIAS",
        value: "042001010",
      },
    },
    {
      label: "INVESTIGACION Y DESARROLLO CIENTIFICO",
      value: {
        Description: "SCIENTIFIC RESEARCH AND DEVELOPMENT",
        CodigoSiaerp: "773",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "INVESTIGACION Y DESARROLLO CIENTIFICO",
        value: "042001001",
      },
    },
    {
      label: "OTRAS ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TECNICAS",
      value: {
        Description: "OTHER PROFESSIONAL, SCIENTIFIC, AND TECHNICAL ACTIVITIES",
        CodigoSiaerp: "778",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "OTRAS ACTIVIDADES PROFESIONALES, CIENTIFICAS Y TECNICAS",
        value: "042001009",
      },
    },
    {
      label: "OTROS SERVICIOS EMPRESARIALES N.C.P.",
      value: {
        Description: "OTHER BUSINESS SERVICES N.E.C.",
        CodigoSiaerp: "617",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "OTROS SERVICIOS EMPRESARIALES N.C.P.",
        value: "042001019",
      },
    },
    {
      label: "PUBLICIDAD E INVESTIGACION DE MERCADOS",
      value: {
        Description: "ADVERTISING AND MARKET RESEARCH",
        CodigoSiaerp: "777",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label: "PUBLICIDAD E INVESTIGACION DE MERCADOS",
        value: "042001005",
      },
    },
    {
      label:
        "SERVICIOS DE CONCESION DE LICENCIAS PARA EL DERECHO DE USO DE ACTIVOS INTANGIBLES",
      value: {
        Description:
          "SERVICES FOR LICENSING THE RIGHT TO USE INTANGIBLE ASSETS",
        CodigoSiaerp: "616",
        CodigoZoho: null,
        CodigoVT: null,
        CodigoPadre: "042001",
        Abreviado: null,
        Nivel: 3,
        NivelFinal: "Y",
        label:
          "SERVICIOS DE CONCESION DE LICENCIAS PARA EL DERECHO DE USO DE ACTIVOS INTANGIBLES",
        value: "042001016",
      },
    },
  ],
};

export { subActividadEconomicas, detalleActividadEconomica };
