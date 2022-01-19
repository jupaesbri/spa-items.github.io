import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {

    private items: any[] = [
        {
            observacion: "Sin Definir",
            sueldo_anual: "Sin Definir",
            cantidad_items: 2393
           },
           {
            observacion: "SALUD",
            sueldo_anual: 111676509.56755334,
            cantidad_items: 1321
           },
           {
            observacion: "SMSC",
            sueldo_anual: 39821554.47137985,
            cantidad_items: 885
           },
           {
            observacion: "SRA. DESIREE BRAVO",
            sueldo_anual: 11991104.368430002,
            cantidad_items: 207
           },
           {
            observacion: "RODRIGO SAUCEDO",
            sueldo_anual: 5984211.454063335,
            cantidad_items: 171
           },
           {
            observacion: "EX COVID",
            sueldo_anual: 4564024.6130599985,
            cantidad_items: 79
           },
           {
            observacion: "SEMPLA",
            sueldo_anual: 3951896.730136667,
            cantidad_items: 183
           },
           {
            observacion: "FEDERACION DE TRABAJADORES EN SALUD",
            sueldo_anual: 3600271.013679999,
            cantidad_items: 57
           },
           {
            observacion: "FESIRMES",
            sueldo_anual: 2812408.3320666673,
            cantidad_items: 25
           },
           {
            observacion: "LIC. FABIOLA MERCADO",
            sueldo_anual: 2718727.2380399997,
            cantidad_items: 36
           },
           {
            observacion: "SEMMURB",
            sueldo_anual: 2382040.3237766675,
            cantidad_items: 110
           },
           {
            observacion: "SMAF",
            sueldo_anual: 2200294.609956667,
            cantidad_items: 94
           },
           {
            observacion: "LIC. DOENITZ SULTZER",
            sueldo_anual: 1948273.0200266666,
            cantidad_items: 18
           },
           {
            observacion: "ANDRES GALLARDO",
            sueldo_anual: 1843353.0253233325,
            cantidad_items: 171,
            img_src: "../../../assets/img/AndresGallardo.jpeg"
           },
           {
            observacion: "LIC. PAOLA MEJIA (SUB DIRECTORA HOSP. BAJIO DEL ORIENTE)",
            sueldo_anual: 1788123.3635099998,
            cantidad_items: 20
           },
           {
            observacion: "DRA. FABIOLA CASTEDO",
            sueldo_anual: 1775543.931773333,
            cantidad_items: 25
           },
           {
            observacion: "DEIVIS MONTENEGRO",
            sueldo_anual: 1728389.9406033328,
            cantidad_items: 26
           },
           {
            observacion: "LIC. KEVIN AGUILERA (SUB DIRECTOR H0SP. PLAN TRES MIL)",
            sueldo_anual: 1683841.3445699997,
            cantidad_items: 17
           },
           {
            observacion: "SMOP",
            sueldo_anual: 1672578.3238266665,
            cantidad_items: 71
           },
           {
            observacion: "CONC. LORETO MORENO",
            sueldo_anual: 1456555.4276533332,
            cantidad_items: 60
           },
           {
            observacion: "SPT A",
            sueldo_anual: 1411126.5269933334,
            cantidad_items: 15
           },
           {
            observacion: "SIRMES RED SUR",
            sueldo_anual: 1406970.21157,
            cantidad_items: 13
           },
           {
            observacion: "LIC. JOSE DURAN",
            sueldo_anual: 1399592.1165966664,
            cantidad_items: 15
           },
           {
            observacion: "LIC. CARLOS CARRION",
            sueldo_anual: 1377110.7750399997,
            cantidad_items: 14
           },
           {
            observacion: "CONC. FRANZ SUCRE",
            sueldo_anual: 1236691.60538,
            cantidad_items: 31
           },
           {
            observacion: "ROSY VALENCIA",
            sueldo_anual: 1160227.7650700002,
            cantidad_items: 64
           },
           {
            observacion: "CONC. JHONNY FERNANDEZ",
            sueldo_anual: 1099431.3863866664,
            cantidad_items: 15
           },
           {
            observacion: "SR. SAUL AVALOS",
            sueldo_anual: 1069250.336,
            cantidad_items: 13
           },
           {
            observacion: "CONC. HORTENCIA SANCHEZ",
            sueldo_anual: 980930.3547266666,
            cantidad_items: 27
           },
           {
            observacion: "DRA SUAREZ",
            sueldo_anual: 977743.8605000001,
            cantidad_items: 13
           },
           {
            observacion: "JUAN JOSE DORADO",
            sueldo_anual: 965253.7897200002,
            cantidad_items: 77
           },
           {
            observacion: "LIC. FERNANDO MUSTAFA",
            sueldo_anual: 954395.2469333332,
            cantidad_items: 15
           },
           {
            observacion: "CONC. TITO SANJINES",
            sueldo_anual: 945382.4727966668,
            cantidad_items: 11
           },
           {
            observacion: "EMILIANO CRONEMBOLD",
            sueldo_anual: 938432.8202333329,
            cantidad_items: 65
           },
           {
            observacion: "CONC. DORA BALDIVIEZO",
            sueldo_anual: 925317.61179,
            cantidad_items: 13
           },
           {
            observacion: "ING. JOSE LUIS MONTOYA (ENCARGADO IME)",
            sueldo_anual: 877465.5392066666,
            cantidad_items: 10
           },
           {
            observacion: "COMPROMISO ARQ. SOSA CON BAJIO",
            sueldo_anual: 814445.0180533333,
            cantidad_items: 10
           },
           {
            observacion: "ARQ. DANIEL BANEGAS (SUB DIRECTOR HOSP. FRANCES)",
            sueldo_anual: 804462.1893,
            cantidad_items: 9
           },
           {
            observacion: "CINTHIA ROSALES - ARQ SOSA",
            sueldo_anual: 769090.6561799999,
            cantidad_items: 14
           },
           {
            observacion: "CONC. MARTHA CAMPOS",
            sueldo_anual: 690285.3409466667,
            cantidad_items: 33
           },
           {
            observacion: "SEPES",
            sueldo_anual: 670265.2187733332,
            cantidad_items: 36
           },
           {
            observacion: "DR TORO -SMSC",
            sueldo_anual: 669795.1497966668,
            cantidad_items: 12
           },
           {
            observacion: "DR. SALVATIERRA (DIRECTOR MEDICO H.M.P.T.M.)",
            sueldo_anual: 637049.51387,
            cantidad_items: 7
           },
           {
            observacion: "ING. KARINA CALIZAYA (SUB DIRECTORA RED NORTE)",
            sueldo_anual: 628376.8326733334,
            cantidad_items: 7
           },
           {
            observacion: "CONC. MELODY TELLEZ",
            sueldo_anual: 621930.0445966667,
            cantidad_items: 6
           },
           {
            observacion: "ING. FANNY NUÑEZ",
            sueldo_anual: 568339.5747333332,
            cantidad_items: 32
           },
           {
            observacion: "ROMEL PORCEL",
            sueldo_anual: 553289.3922966666,
            cantidad_items: 8
           },
           {
            observacion: "SPT",
            sueldo_anual: 548398.9709733333,
            cantidad_items: 16
           },
           {
            observacion: "DRA. KATHERINE MUYURO",
            sueldo_anual: 523200.4261,
            cantidad_items: 25
           },
           {
            observacion: "POSTULANTE",
            sueldo_anual: 515445.98027999984,
            cantidad_items: 7
           },
           {
            observacion: "DRA. RUTH AGUILERA - SIRMES RED CENTRO",
            sueldo_anual: 510369.8733466667,
            cantidad_items: 5
           },
           {
            observacion: "ABG. JUAN JOSE CASTEDO",
            sueldo_anual: 508301.9277600002,
            cantidad_items: 47
           },
           {
            observacion: "ABG. ANGELICA ZAPATA",
            sueldo_anual: 494295.17162666656,
            cantidad_items: 7
           },
           {
            observacion: "BENITO TORRICO",
            sueldo_anual: 447890.5753666668,
            cantidad_items: 40
           },
           {
            observacion: "DR CAMACHO",
            sueldo_anual: 444749.4035233333,
            cantidad_items: 5
           },
           {
            observacion: "CRMS HAIDY MUÑOZ ",
            sueldo_anual: 438032.08166666655,
            cantidad_items: 34
           },
           {
            observacion: "ZOOLOGICO",
            sueldo_anual: 410576.4432000001,
            cantidad_items: 7
           },
           {
            observacion: "CONC. JULIA CESPEDES",
            sueldo_anual: 391539.99181,
            cantidad_items: 19
           },
           {
            observacion: "ABG. JOSE NEGRETE",
            sueldo_anual: 365977.58405999996,
            cantidad_items: 10
           },
           {
            observacion: "DR. SERGIO ECHAZU (FESIRMES)",
            sueldo_anual: 359511.34034000005,
            cantidad_items: 5
           },
           {
            observacion: "SIRMES RED ESTE",
            sueldo_anual: 358424.34627999994,
            cantidad_items: 4
           },
           {
            observacion: "YAMILKA SADUD",
            sueldo_anual: 357098.05383999995,
            cantidad_items: 17
           },
           {
            observacion: "SIRMES RED CENTRO",
            sueldo_anual: 350862.47196,
            cantidad_items: 3
           },
           {
            observacion: "SR. CARLOS TALAMAS (GERENTE HOSP. BAJIO DEL ORIENTE)",
            sueldo_anual: 350862.47196,
            cantidad_items: 3
           },
           {
            observacion: "SR. CARLOS VEGA - SPT",
            sueldo_anual: 350862.47196,
            cantidad_items: 3
           },
           {
            observacion: "LIC. JUAN CARLOS BURELA (SUB DIRECTOR RED SUR)",
            sueldo_anual: 343449.2083733333,
            cantidad_items: 4
           },
           {
            observacion: "DR. BENITEZ",
            sueldo_anual: 319828.34927999997,
            cantidad_items: 4
           },
           {
            observacion: "DR. ALI URIONA (DIRECTOR MEDICO HOSP. PAMPA DE LA ISLA)",
            sueldo_anual: 314398.3776266667,
            cantidad_items: 3
           },
           {
            observacion: "GONZALO \/ AS",
            sueldo_anual: 313700.80195666663,
            cantidad_items: 12
           },
           {
            observacion: "DR. FERNANDO LACOA (DIRECTOR MEDICO HOSP. FRANCES)",
            sueldo_anual: 304344.20016,
            cantidad_items: 3
           },
           {
            observacion: "SR. ROLY (FEDERACION SINDICAL)",
            sueldo_anual: 295165.62001666665,
            cantidad_items: 5
           },
           {
            observacion: "ROGER CRONEMBOLD",
            sueldo_anual: 279266.8002666666,
            cantidad_items: 4
           },
           {
            observacion: "ABG. ROBERTO AYALA",
            sueldo_anual: 268375.7342933333,
            cantidad_items: 3
           },
           {
            observacion: "JOVENES AVANZADA",
            sueldo_anual: 267811.51925,
            cantidad_items: 5
           },
           {
            observacion: "WILLY QUISPE",
            sueldo_anual: 245238.83266666668,
            cantidad_items: 25
           },
           {
            observacion: "DON JORGE\/GONZALO",
            sueldo_anual: 245237.82118000003,
            cantidad_items: 4
           },
           {
            observacion: "ASSO - MINISTERIO DE SALUD",
            sueldo_anual: 233908.31464,
            cantidad_items: 2
           },
           {
            observacion: "DRA. KATERIN CUELLAR",
            sueldo_anual: 233908.31464,
            cantidad_items: 2
           },
           {
            observacion: "LIC. ADHEMAR MEDEIROS (ADMINISTRADOR HOSP. BAJIO DEL ORIENTE)",
            sueldo_anual: 233908.31464,
            cantidad_items: 2
           },
           {
            observacion: "SRA. ROSARIO SCHAMISSEDINE",
            sueldo_anual: 230665.48838666666,
            cantidad_items: 3
           },
           {
            observacion: "SINDICATO RED NORTE",
            sueldo_anual: 224118.213,
            cantidad_items: 4
           },
           {
            observacion: "RAQUEL ROCA",
            sueldo_anual: 214255.63444999995,
            cantidad_items: 3
           },
           {
            observacion: "COVID",
            sueldo_anual: 210288.078,
            cantidad_items: 4
           },
           {
            observacion: "LIC. FERNANDO SATTORI",
            sueldo_anual: 209480.91164,
            cantidad_items: 2
           },
           {
            observacion: "CRMS JENNIFER TORRICO",
            sueldo_anual: 208576.95378666674,
            cantidad_items: 24
           },
           {
            observacion: "CUCHO",
            sueldo_anual: 196745.59424666665,
            cantidad_items: 14
           },
           {
            observacion: "SMS",
            sueldo_anual: 195011.82829333332,
            cantidad_items: 2
           },
           {
            observacion: "DIRECTOR MEDICO H.M.P.I.",
            sueldo_anual: 193424.18326000002,
            cantidad_items: 2
           },
           {
            observacion: "SUB DIRECTOR H.M.P.I.",
            sueldo_anual: 193424.18326000002,
            cantidad_items: 2
           },
           {
            observacion: "DR. MORON",
            sueldo_anual: 193335.13353,
            cantidad_items: 2
           },
           {
            observacion: "SIRMES DE LA RED ESTE",
            sueldo_anual: 181857.28858000002,
            cantidad_items: 2
           },
           {
            observacion: "ING. PERCY FERNANDEZ",
            sueldo_anual: 181598.27018666666,
            cantidad_items: 2
           },
           {
            observacion: "SUSY BAZOALTO",
            sueldo_anual: 179937.09785333334,
            cantidad_items: 9
           },
           {
            observacion: "CTTO. GESTION 2009",
            sueldo_anual: 176372.93006666665,
            cantidad_items: 3
           },
           {
            observacion: "LIC. PAUL CORTEZ",
            sueldo_anual: 175848.9799733333,
            cantidad_items: 2
           },
           {
            observacion: "ING. JORGE LANDIVAR",
            sueldo_anual: 174801.07978666667,
            cantidad_items: 2
           },
           {
            observacion: "EX COVID (DR. BERNARDO ORTIZ (DIRECTOR H.M.P.I)",
            sueldo_anual: 168153.04476666666,
            cantidad_items: 2
           },
           {
            observacion: "ESPOSA DE PERIODISTA",
            sueldo_anual: 166751.51327999998,
            cantidad_items: 2
           },
           {
            observacion: "LIC. ELIANE SAAVEDRA",
            sueldo_anual: 165047.43057,
            cantidad_items: 2
           },
           {
            observacion: "DR. JAIME BILBAO (EX DIRECTOR ADJUNTO)",
            sueldo_anual: 160980.1259733333,
            cantidad_items: 2
           },
           {
            observacion: "LIC. ZUMARAN (BIENESTAR SOCIAL)",
            sueldo_anual: 160980.1259733333,
            cantidad_items: 2
           },
           {
            observacion: "LIC. MARISABEL VACA (SUB DIRECTORA HOSP VILLA 1ERO MAYO)",
            sueldo_anual: 148440.0255066667,
            cantidad_items: 2
           },
           {
            observacion: "CONC. MIRTHA PEREZ",
            sueldo_anual: 141126.97690666665,
            cantidad_items: 9
           },
           {
            observacion: "RAUL SAAVEDRA",
            sueldo_anual: 139671.05855999998,
            cantidad_items: 16
           },
           {
            observacion: "ABG. LOURDES ARDAYA",
            sueldo_anual: 138563.24724,
            cantidad_items: 3
           },
           {
            observacion: "DR. BALLON",
            sueldo_anual: 136242.62450333333,
            cantidad_items: 2
           },
           {
            observacion: "MOSITA",
            sueldo_anual: 134075.35870666665,
            cantidad_items: 2
           },
           {
            observacion: "SINDICATO RED CENTRO ",
            sueldo_anual: 129982.80584666667,
            cantidad_items: 2
           },
           {
            observacion: "CRMS D-4 VERONICA AGUILERA",
            sueldo_anual: 123189.73919999998,
            cantidad_items: 15
           },
           {
            observacion: "DRA. GLORIA QUEZADA (RESPONSABLE SISME)",
            sueldo_anual: 122576.00021333333,
            cantidad_items: 2
           },
           {
            observacion: "CONC. MARIA RUTH BRAVO",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "DR. WILLIAM ALBA (JEFE MEDICO HOSP. VILLA 1ERO MAYO)",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "HIJO CON DISCAPACIDAD",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "LIC. ANTONIO PARADA",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "LIC. MARCO ANTONIO PEÑA CUELLAR (SUB DIRECTOR HOSP BAJIO DEL ORIENTE)",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "LIC. NORMA BORJA (CONTRALORIA)",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "OMAR RIVERA",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "RASTRILLAJE - ALTO SAN PEDRO",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "RASTRILLAJE - EMBARAZADA",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "SR. NICOLAS CHUVE (CONTROL SOCIAL)",
            sueldo_anual: 116954.15732,
            cantidad_items: 1
           },
           {
            observacion: "INAMOVILIDAD LABORAL (DISCAPACITADO)",
            sueldo_anual: 115693.84493333333,
            cantidad_items: 2
           },
           {
            observacion: "FEDERACION DE TRABAJADORES\/LIC. CHAMBI",
            sueldo_anual: 115581.99785000001,
            cantidad_items: 2
           },
           {
            observacion: "ARQ. RIM SAFAR ",
            sueldo_anual: 105908.72292,
            cantidad_items: 1
           },
           {
            observacion: "CASO ODONTOLOGO",
            sueldo_anual: 105908.72292,
            cantidad_items: 1
           },
           {
            observacion: "HNA AS",
            sueldo_anual: 105908.72292,
            cantidad_items: 1
           },
           {
            observacion: "TENIA ITEM DEL EJECUTIVO",
            sueldo_anual: 105908.72292,
            cantidad_items: 1
           },
           {
            observacion: "TITO MONASTERIO",
            sueldo_anual: 105908.72292,
            cantidad_items: 1
           },
           {
            observacion: "SPT \/ CONTROL ELECTORAL",
            sueldo_anual: 105162.55698666666,
            cantidad_items: 6
           },
           {
            observacion: "DR. RAUL HEVIA",
            sueldo_anual: 102467.64528,
            cantidad_items: 1
           },
           {
            observacion: "LIC. RENE ARCE",
            sueldo_anual: 102467.64528,
            cantidad_items: 1
           },
           {
            observacion: "AVANZADA",
            sueldo_anual: 101034.91331999999,
            cantidad_items: 5
           },
           {
            observacion: "DRA ARCANI",
            sueldo_anual: 100406.78009999997,
            cantidad_items: 2
           },
           {
            observacion: "CAMILO",
            sueldo_anual: 100146.75022,
            cantidad_items: 11
           },
           {
            observacion: "DR. RALDES (CENTRO DE SALUD ELVIRA WUNDERLICH)",
            sueldo_anual: 99603.81530000002,
            cantidad_items: 1
           },
           {
            observacion: "EX COVID POSTULANTE",
            sueldo_anual: 99603.81530000002,
            cantidad_items: 1
           },
           {
            observacion: "E. SALAZAR",
            sueldo_anual: 97354.69689,
            cantidad_items: 1
           },
           {
            observacion: "POSTULANTE*",
            sueldo_anual: 96889.02399,
            cantidad_items: 1
           },
           {
            observacion: "CENTRO DE SALUD ELVIRA WUNDERLICH",
            sueldo_anual: 96712.09163000001,
            cantidad_items: 1
           },
           {
            observacion: "SUB DIRECTORA H.M.B.O.",
            sueldo_anual: 96712.09163000001,
            cantidad_items: 1
           },
           {
            observacion: "CRMS C-44",
            sueldo_anual: 94445.46672000001,
            cantidad_items: 12
           },
           {
            observacion: "CRMS C-45",
            sueldo_anual: 94445.46672000001,
            cantidad_items: 12
           },
           {
            observacion: "CRMS C-47",
            sueldo_anual: 94445.46672000001,
            cantidad_items: 12
           },
           {
            observacion: "CRMS C-50",
            sueldo_anual: 94445.46672000001,
            cantidad_items: 12
           },
           {
            observacion: "TRABAJO CULTURAL",
            sueldo_anual: 94445.46672000001,
            cantidad_items: 12
           },
           {
            observacion: "AUT. ARQ. SOSA (CINTHIA)",
            sueldo_anual: 92535.15744,
            cantidad_items: 1
           },
           {
            observacion: "SR. PEDRO HOYOS (RESPONSABLE TECNOLOGIA DMS)",
            sueldo_anual: 92526.75432,
            cantidad_items: 1
           },
           {
            observacion: "TIENE CONTRATO COVID",
            sueldo_anual: 92526.75432,
            cantidad_items: 1
           },
           {
            observacion: "TRABAJABA EN SMAF",
            sueldo_anual: 92526.75432,
            cantidad_items: 1
           },
           {
            observacion: "ERIKA CHAVEZ",
            sueldo_anual: 92500.8447,
            cantidad_items: 11
           },
           {
            observacion: "JOSE ESPAÑA",
            sueldo_anual: 92062.59865,
            cantidad_items: 5
           },
           {
            observacion: "ARQ A",
            sueldo_anual: 88036.92062,
            cantidad_items: 1
           },
           {
            observacion: "MARIANO",
            sueldo_anual: 87643.45230666666,
            cantidad_items: 2
           },
           {
            observacion: "CONTROL SOCIAL",
            sueldo_anual: 87573.34850000001,
            cantidad_items: 5
           },
           {
            observacion: "ARQ. FARID EID",
            sueldo_anual: 83322.22565333333,
            cantidad_items: 1
           },
           {
            observacion: "DR. JOAQUIN MONASTERIO",
            sueldo_anual: 80490.06298666666,
            cantidad_items: 1
           },
           {
            observacion: "SRA. CAROL VISCARRA",
            sueldo_anual: 80490.06298666666,
            cantidad_items: 1
           },
           {
            observacion: "SIRMES HOSP. FRANCES\/LIC. CHAMBI",
            sueldo_anual: 78942.17715999999,
            cantidad_items: 1
           },
           {
            observacion: "RESPONSABLE DROGO",
            sueldo_anual: 76512.50837999998,
            cantidad_items: 1
           },
           {
            observacion: "ING. BOWLES",
            sueldo_anual: 75326.57916666668,
            cantidad_items: 8
           },
           {
            observacion: "ING. BECHARA",
            sueldo_anual: 74131.8578,
            cantidad_items: 1
           },
           {
            observacion: "TRANSPARENCIA",
            sueldo_anual: 72065.15711999999,
            cantidad_items: 4
           },
           {
            observacion: "PROF. JOSE LUIS AYALA",
            sueldo_anual: 71860.68119999998,
            cantidad_items: 10
           },
           {
            observacion: "DRC",
            sueldo_anual: 69816.70006666666,
            cantidad_items: 1
           },
           {
            observacion: "SUB DIRECTORA H.M.P.I.",
            sueldo_anual: 69816.70006666666,
            cantidad_items: 1
           },
           {
            observacion: "LIC. PATRICIA QUIROGA (ADMINISTRADORA HOSP. PLAN TRES MIL)",
            sueldo_anual: 64644.11286666666,
            cantidad_items: 1
           },
           {
            observacion: "SINDICATO RED ESTE",
            sueldo_anual: 64644.11286666666,
            cantidad_items: 1
           },
           {
            observacion: "SEGURIDAD CIUDADANA",
            sueldo_anual: 62720.57645333333,
            cantidad_items: 1
           },
           {
            observacion: "ABG. JOSE AYALA",
            sueldo_anual: 57846.92246666666,
            cantidad_items: 1
           },
           {
            observacion: "LIC. ELIAS CLAVIJO",
            sueldo_anual: 57846.92246666666,
            cantidad_items: 1
           },
           {
            observacion: "SISME",
            sueldo_anual: 57846.92246666666,
            cantidad_items: 1
           },
           {
            observacion: "SPT (SR. ROMEL)",
            sueldo_anual: 57846.92246666666,
            cantidad_items: 1
           },
           {
            observacion: "MEDIO AMBIENTE",
            sueldo_anual: 56761.83069333334,
            cantidad_items: 8
           },
           {
            observacion: "RRHH",
            sueldo_anual: 55802.552299999996,
            cantidad_items: 1
           },
           {
            observacion: "LIC. ALFREDO NEGRETE (RESPONSABLE DROGODEPENDIENTE)",
            sueldo_anual: 51807.958033333336,
            cantidad_items: 1
           },
           {
            observacion: "PONY ARAUZ",
            sueldo_anual: 50817.40136,
            cantidad_items: 6
           },
           {
            observacion: "ENMA SOSA",
            sueldo_anual: 49443.95808,
            cantidad_items: 3
           },
           {
            observacion: "SMEL",
            sueldo_anual: 49308.846803333334,
            cantidad_items: 1
           },
           {
            observacion: "GUARACACHI",
            sueldo_anual: 48363.57360999999,
            cantidad_items: 5
           },
           {
            observacion: "GRINGA SMAF",
            sueldo_anual: 47834.955116666664,
            cantidad_items: 1
           },
           {
            observacion: "CRMS CASA C",
            sueldo_anual: 47119.094880000004,
            cantidad_items: 4
           },
           {
            observacion: "DM-2 - ALICIA PARADA",
            sueldo_anual: 43116.40871999999,
            cantidad_items: 6
           },
           {
            observacion: "MRCIO",
            sueldo_anual: 41659.82901666667,
            cantidad_items: 1
           },
           {
            observacion: "RDDY",
            sueldo_anual: 41659.82901666667,
            cantidad_items: 1
           },
           {
            observacion: "CRMS C-46",
            sueldo_anual: 39352.277799999996,
            cantidad_items: 5
           },
           {
            observacion: "EZEQUIEL SERRES",
            sueldo_anual: 38656.764006666664,
            cantidad_items: 2
           },
           {
            observacion: "DM-3",
            sueldo_anual: 37983.50292,
            cantidad_items: 1
           },
           {
            observacion: "ARQ. SANDRA VELARDE",
            sueldo_anual: 30803.15359,
            cantidad_items: 3
           },
           {
            observacion: "CONC. WILLY LEON",
            sueldo_anual: 29200.530773333332,
            cantidad_items: 4
           },
           {
            observacion: "NENY BRAVO",
            sueldo_anual: 26006.722719999998,
            cantidad_items: 4
           },
           {
            observacion: "MISA",
            sueldo_anual: 24587.45131333333,
            cantidad_items: 3
           },
           {
            observacion: "VIEJITO DE PLAZA",
            sueldo_anual: 17514.669700000002,
            cantidad_items: 1
           },
           {
            observacion: "ROGER MARIACA",
            sueldo_anual: 14743.274039999998,
            cantidad_items: 1
           },
           {
            observacion: "DR FABIAN",
            sueldo_anual: 14190.457673333332,
            cantidad_items: 1
           },
           {
            observacion: "ROMULO PEREDO",
            sueldo_anual: 12360.98952,
            cantidad_items: 1
           },
           {
            observacion: "PRENSA",
            sueldo_anual: 11050.102799999999,
            cantidad_items: 1
           },
           {
            observacion: "EN REEMPLAZO DEL HIJO DE LA PROFESORA CHARO",
            sueldo_anual: 9909.962809999999,
            cantidad_items: 1
           },
           {
            observacion: "HNA. DE DARIO",
            sueldo_anual: 7922.196993333334,
            cantidad_items: 1
           },
           {
            observacion: "ROBERTO AÑEZ",
            sueldo_anual: 6615.7452533333335,
            cantidad_items: 1
           }
    ];

    constructor() {
        console.log("Servicio listo para usar");
    }

    public getItems() {
        return this.items;
    }

    public getItem(idx: string):Item {
      return this.items[Number(idx)];
    } 
}


export interface Item {
    nombre: string,
    bio: string,
    img: string,
    aparicion: string,
    casa: string
}