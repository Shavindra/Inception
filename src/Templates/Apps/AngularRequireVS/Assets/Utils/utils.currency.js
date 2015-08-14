(function (u) {

    u.createNS(['Data.currencyCodes', 'Data.getCurrencyInfo', 'Data.mapCurrencyCodes']);


    //GIST: Country Codes
    var currencyInfo = {
        "USD": {
            "symbol_code": "$",
            "name": "US Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "USD",
            "name_plural": "US dollars"
        },
        "CAD": {
            "symbol_code": "CA$",
            "name": "Canadian Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CAD",
            "name_plural": "Canadian dollars"
        },
        "EUR": {
            "symbol_code": "€",
            "name": "Euro",
            "symbol_native": "€",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "EUR",
            "name_plural": "euros"
        },
        "AED": {
            "symbol_code": "AED",
            "name": "United Arab Emirates Dirham",
            "symbol_native": "د.إ.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AED",
            "name_plural": "UAE dirhams"
        },
        "AFN": {
            "symbol_code": "Af",
            "name": "Afghan Afghani",
            "symbol_native": "؋",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "AFN",
            "name_plural": "Afghan Afghanis"
        },
        "ALL": {
            "symbol_code": "ALL",
            "name": "Albanian Lek",
            "symbol_native": "Lek",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "ALL",
            "name_plural": "Albanian lekë"
        },
        "AMD": {
            "symbol_code": "AMD",
            "name": "Armenian Dram",
            "symbol_native": "դր.",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "AMD",
            "name_plural": "Armenian drams"
        },
        "ARS": {
            "symbol_code": "AR$",
            "name": "Argentine Peso",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ARS",
            "name_plural": "Argentine pesos"
        },
        "AUD": {
            "symbol_code": "AU$",
            "name": "Australian Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AUD",
            "name_plural": "Australian dollars"
        },
        "AZN": {
            "symbol_code": "man.",
            "name": "Azerbaijani Manat",
            "symbol_native": "ман.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AZN",
            "name_plural": "Azerbaijani manats"
        },
        "BAM": {
            "symbol_code": "KM",
            "name": "Bosnia-Herzegovina Convertible Mark",
            "symbol_native": "KM",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BAM",
            "name_plural": "Bosnia-Herzegovina convertible marks"
        },
        "BDT": {
            "symbol_code": "Tk",
            "name": "Bangladeshi Taka",
            "symbol_native": "৳",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BDT",
            "name_plural": "Bangladeshi takas"
        },
        "BGN": {
            "symbol_code": "BGN",
            "name": "Bulgarian Lev",
            "symbol_native": "лв.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BGN",
            "name_plural": "Bulgarian leva"
        },
        "BHD": {
            "symbol_code": "BD",
            "name": "Bahraini Dinar",
            "symbol_native": "د.ب.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "BHD",
            "name_plural": "Bahraini dinars"
        },
        "BIF": {
            "symbol_code": "FBu",
            "name": "Burundian Franc",
            "symbol_native": "FBu",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "BIF",
            "name_plural": "Burundian francs"
        },
        "BND": {
            "symbol_code": "BN$",
            "name": "Brunei Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BND",
            "name_plural": "Brunei dollars"
        },
        "BOB": {
            "symbol_code": "Bs",
            "name": "Bolivian Boliviano",
            "symbol_native": "Bs",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BOB",
            "name_plural": "Bolivian bolivianos"
        },
        "BRL": {
            "symbol_code": "R$",
            "name": "Brazilian Real",
            "symbol_native": "R$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BRL",
            "name_plural": "Brazilian reals"
        },
        "BWP": {
            "symbol_code": "BWP",
            "name": "Botswanan Pula",
            "symbol_native": "P",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BWP",
            "name_plural": "Botswanan pulas"
        },
        "BYR": {
            "symbol_code": "BYR",
            "name": "Belarusian Ruble",
            "symbol_native": "BYR",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "BYR",
            "name_plural": "Belarusian rubles"
        },
        "BZD": {
            "symbol_code": "BZ$",
            "name": "Belize Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BZD",
            "name_plural": "Belize dollars"
        },
        "CDF": {
            "symbol_code": "CDF",
            "name": "Congolese Franc",
            "symbol_native": "FrCD",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CDF",
            "name_plural": "Congolese francs"
        },
        "CHF": {
            "symbol_code": "CHF",
            "name": "Swiss Franc",
            "symbol_native": "CHF",
            "decimal_digits": 2,
            "rounding": 0.05,
            "code": "CHF",
            "name_plural": "Swiss francs"
        },
        "CLP": {
            "symbol_code": "CL$",
            "name": "Chilean Peso",
            "symbol_native": "$",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "CLP",
            "name_plural": "Chilean pesos"
        },
        "CNY": {
            "symbol_code": "CN¥",
            "name": "Chinese Yuan",
            "symbol_native": "CN¥",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CNY",
            "name_plural": "Chinese yuan"
        },
        "COP": {
            "symbol_code": "CO$",
            "name": "Colombian Peso",
            "symbol_native": "$",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "COP",
            "name_plural": "Colombian pesos"
        },
        "CRC": {
            "symbol_code": "₡",
            "name": "Costa Rican Colón",
            "symbol_native": "₡",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "CRC",
            "name_plural": "Costa Rican colóns"
        },
        "CVE": {
            "symbol_code": "CV$",
            "name": "Cape Verdean Escudo",
            "symbol_native": "CV$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CVE",
            "name_plural": "Cape Verdean escudos"
        },
        "CZK": {
            "symbol_code": "Kč",
            "name": "Czech Republic Koruna",
            "symbol_native": "Kč",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CZK",
            "name_plural": "Czech Republic korunas"
        },
        "DJF": {
            "symbol_code": "Fdj",
            "name": "Djiboutian Franc",
            "symbol_native": "Fdj",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "DJF",
            "name_plural": "Djiboutian francs"
        },
        "DKK": {
            "symbol_code": "Dkr",
            "name": "Danish Krone",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "DKK",
            "name_plural": "Danish kroner"
        },
        "DOP": {
            "symbol_code": "RD$",
            "name": "Dominican Peso",
            "symbol_native": "RD$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "DOP",
            "name_plural": "Dominican pesos"
        },
        "DZD": {
            "symbol_code": "DA",
            "name": "Algerian Dinar",
            "symbol_native": "د.ج.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "DZD",
            "name_plural": "Algerian dinars"
        },
        "EEK": {
            "symbol_code": "Ekr",
            "name": "Estonian Kroon",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "EEK",
            "name_plural": "Estonian kroons"
        },
        "EGP": {
            "symbol_code": "EGP",
            "name": "Egyptian Pound",
            "symbol_native": "ج.م.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "EGP",
            "name_plural": "Egyptian pounds"
        },
        "ERN": {
            "symbol_code": "Nfk",
            "name": "Eritrean Nakfa",
            "symbol_native": "Nfk",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ERN",
            "name_plural": "Eritrean nakfas"
        },
        "ETB": {
            "symbol_code": "Br",
            "name": "Ethiopian Birr",
            "symbol_native": "Br",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ETB",
            "name_plural": "Ethiopian birrs"
        },
        "GBP": {
            "symbol_code": "£",
            "name": "British Pound Sterling",
            "symbol_native": "£",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GBP",
            "name_plural": "British pounds sterling"
        },
        "GEL": {
            "symbol_code": "GEL",
            "name": "Georgian Lari",
            "symbol_native": "GEL",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GEL",
            "name_plural": "Georgian laris"
        },
        "GHS": {
            "symbol_code": "GH₵",
            "name": "Ghanaian Cedi",
            "symbol_native": "GH₵",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GHS",
            "name_plural": "Ghanaian cedis"
        },
        "GNF": {
            "symbol_code": "FG",
            "name": "Guinean Franc",
            "symbol_native": "FG",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "GNF",
            "name_plural": "Guinean francs"
        },
        "GTQ": {
            "symbol_code": "GTQ",
            "name": "Guatemalan Quetzal",
            "symbol_native": "Q",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GTQ",
            "name_plural": "Guatemalan quetzals"
        },
        "HKD": {
            "symbol_code": "HK$",
            "name": "Hong Kong Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "HKD",
            "name_plural": "Hong Kong dollars"
        },
        "HNL": {
            "symbol_code": "HNL",
            "name": "Honduran Lempira",
            "symbol_native": "L",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "HNL",
            "name_plural": "Honduran lempiras"
        },
        "HRK": {
            "symbol_code": "kn",
            "name": "Croatian Kuna",
            "symbol_native": "kn",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "HRK",
            "name_plural": "Croatian kunas"
        },
        "HUF": {
            "symbol_code": "Ft",
            "name": "Hungarian Forint",
            "symbol_native": "Ft",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "HUF",
            "name_plural": "Hungarian forints"
        },
        "IDR": {
            "symbol_code": "Rp",
            "name": "Indonesian Rupiah",
            "symbol_native": "Rp",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "IDR",
            "name_plural": "Indonesian rupiahs"
        },
        "ILS": {
            "symbol_code": "₪",
            "name": "Israeli New Sheqel",
            "symbol_native": "₪",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ILS",
            "name_plural": "Israeli new sheqels"
        },
        "INR": {
            "symbol_code": "Rs",
            "name": "Indian Rupee",
            "symbol_native": "টকা",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "INR",
            "name_plural": "Indian rupees"
        },
        "IQD": {
            "symbol_code": "IQD",
            "name": "Iraqi Dinar",
            "symbol_native": "د.ع.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "IQD",
            "name_plural": "Iraqi dinars"
        },
        "IRR": {
            "symbol_code": "IRR",
            "name": "Iranian Rial",
            "symbol_native": "﷼",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "IRR",
            "name_plural": "Iranian rials"
        },
        "ISK": {
            "symbol_code": "Ikr",
            "name": "Icelandic Króna",
            "symbol_native": "kr",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "ISK",
            "name_plural": "Icelandic krónur"
        },
        "JMD": {
            "symbol_code": "J$",
            "name": "Jamaican Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "JMD",
            "name_plural": "Jamaican dollars"
        },
        "JOD": {
            "symbol_code": "JD",
            "name": "Jordanian Dinar",
            "symbol_native": "د.أ.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "JOD",
            "name_plural": "Jordanian dinars"
        },
        "JPY": {
            "symbol_code": "¥",
            "name": "Japanese Yen",
            "symbol_native": "￥",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "JPY",
            "name_plural": "Japanese yen"
        },
        "KES": {
            "symbol_code": "Ksh",
            "name": "Kenyan Shilling",
            "symbol_native": "Ksh",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "KES",
            "name_plural": "Kenyan shillings"
        },
        "KHR": {
            "symbol_code": "KHR",
            "name": "Cambodian Riel",
            "symbol_native": "៛",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "KHR",
            "name_plural": "Cambodian riels"
        },
        "KMF": {
            "symbol_code": "CF",
            "name": "Comorian Franc",
            "symbol_native": "FC",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "KMF",
            "name_plural": "Comorian francs"
        },
        "KRW": {
            "symbol_code": "₩",
            "name": "South Korean Won",
            "symbol_native": "₩",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "KRW",
            "name_plural": "South Korean won"
        },
        "KWD": {
            "symbol_code": "KD",
            "name": "Kuwaiti Dinar",
            "symbol_native": "د.ك.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "KWD",
            "name_plural": "Kuwaiti dinars"
        },
        "KZT": {
            "symbol_code": "KZT",
            "name": "Kazakhstani Tenge",
            "symbol_native": "тңг.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "KZT",
            "name_plural": "Kazakhstani tenges"
        },
        "LBP": {
            "symbol_code": "LB£",
            "name": "Lebanese Pound",
            "symbol_native": "ل.ل.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "LBP",
            "name_plural": "Lebanese pounds"
        },
        "LKR": {
            "symbol_code": "SLRs",
            "name": "Sri Lankan Rupee",
            "symbol_native": "SL Re",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "LKR",
            "name_plural": "Sri Lankan rupees"
        },
        "LTL": {
            "symbol_code": "Lt",
            "name": "Lithuanian Litas",
            "symbol_native": "Lt",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "LTL",
            "name_plural": "Lithuanian litai"
        },
        "LVL": {
            "symbol_code": "Ls",
            "name": "Latvian Lats",
            "symbol_native": "Ls",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "LVL",
            "name_plural": "Latvian lati"
        },
        "LYD": {
            "symbol_code": "LD",
            "name": "Libyan Dinar",
            "symbol_native": "د.ل.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "LYD",
            "name_plural": "Libyan dinars"
        },
        "MAD": {
            "symbol_code": "MAD",
            "name": "Moroccan Dirham",
            "symbol_native": "د.م.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MAD",
            "name_plural": "Moroccan dirhams"
        },
        "MDL": {
            "symbol_code": "MDL",
            "name": "Moldovan Leu",
            "symbol_native": "MDL",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MDL",
            "name_plural": "Moldovan lei"
        },
        "MGA": {
            "symbol_code": "MGA",
            "name": "Malagasy Ariary",
            "symbol_native": "MGA",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "MGA",
            "name_plural": "Malagasy Ariaries"
        },
        "MKD": {
            "symbol_code": "MKD",
            "name": "Macedonian Denar",
            "symbol_native": "MKD",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MKD",
            "name_plural": "Macedonian denari"
        },
        "MMK": {
            "symbol_code": "MMK",
            "name": "Myanma Kyat",
            "symbol_native": "K",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "MMK",
            "name_plural": "Myanma kyats"
        },
        "MOP": {
            "symbol_code": "MOP$",
            "name": "Macanese Pataca",
            "symbol_native": "MOP$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MOP",
            "name_plural": "Macanese patacas"
        },
        "MUR": {
            "symbol_code": "MURs",
            "name": "Mauritian Rupee",
            "symbol_native": "MURs",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "MUR",
            "name_plural": "Mauritian rupees"
        },
        "MXN": {
            "symbol_code": "MX$",
            "name": "Mexican Peso",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MXN",
            "name_plural": "Mexican pesos"
        },
        "MYR": {
            "symbol_code": "RM",
            "name": "Malaysian Ringgit",
            "symbol_native": "RM",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MYR",
            "name_plural": "Malaysian ringgits"
        },
        "MZN": {
            "symbol_code": "MTn",
            "name": "Mozambican Metical",
            "symbol_native": "MTn",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MZN",
            "name_plural": "Mozambican meticals"
        },
        "NAD": {
            "symbol_code": "N$",
            "name": "Namibian Dollar",
            "symbol_native": "N$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NAD",
            "name_plural": "Namibian dollars"
        },
        "NGN": {
            "symbol_code": "₦",
            "name": "Nigerian Naira",
            "symbol_native": "₦",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NGN",
            "name_plural": "Nigerian nairas"
        },
        "NIO": {
            "symbol_code": "C$",
            "name": "Nicaraguan Córdoba",
            "symbol_native": "C$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NIO",
            "name_plural": "Nicaraguan córdobas"
        },
        "NOK": {
            "symbol_code": "Nkr",
            "name": "Norwegian Krone",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NOK",
            "name_plural": "Norwegian kroner"
        },
        "NPR": {
            "symbol_code": "NPRs",
            "name": "Nepalese Rupee",
            "symbol_native": "नेरू",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NPR",
            "name_plural": "Nepalese rupees"
        },
        "NZD": {
            "symbol_code": "NZ$",
            "name": "New Zealand Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NZD",
            "name_plural": "New Zealand dollars"
        },
        "OMR": {
            "symbol_code": "OMR",
            "name": "Omani Rial",
            "symbol_native": "ر.ع.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "OMR",
            "name_plural": "Omani rials"
        },
        "PAB": {
            "symbol_code": "B/.",
            "name": "Panamanian Balboa",
            "symbol_native": "B/.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PAB",
            "name_plural": "Panamanian balboas"
        },
        "PEN": {
            "symbol_code": "S/.",
            "name": "Peruvian Nuevo Sol",
            "symbol_native": "S/.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PEN",
            "name_plural": "Peruvian nuevos soles"
        },
        "PHP": {
            "symbol_code": "₱",
            "name": "Philippine Peso",
            "symbol_native": "₱",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PHP",
            "name_plural": "Philippine pesos"
        },
        "PKR": {
            "symbol_code": "PKRs",
            "name": "Pakistani Rupee",
            "symbol_native": "₨",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "PKR",
            "name_plural": "Pakistani rupees"
        },
        "PLN": {
            "symbol_code": "zł",
            "name": "Polish Zloty",
            "symbol_native": "zł",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PLN",
            "name_plural": "Polish zlotys"
        },
        "PYG": {
            "symbol_code": "₲",
            "name": "Paraguayan Guarani",
            "symbol_native": "₲",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "PYG",
            "name_plural": "Paraguayan guaranis"
        },
        "QAR": {
            "symbol_code": "QR",
            "name": "Qatari Rial",
            "symbol_native": "ر.ق.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "QAR",
            "name_plural": "Qatari rials"
        },
        "RON": {
            "symbol_code": "RON",
            "name": "Romanian Leu",
            "symbol_native": "RON",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "RON",
            "name_plural": "Romanian lei"
        },
        "RSD": {
            "symbol_code": "din.",
            "name": "Serbian Dinar",
            "symbol_native": "дин.",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "RSD",
            "name_plural": "Serbian dinars"
        },
        "RUB": {
            "symbol_code": "RUB",
            "name": "Russian Ruble",
            "symbol_native": "руб.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "RUB",
            "name_plural": "Russian rubles"
        },
        "RWF": {
            "symbol_code": "RWF",
            "name": "Rwandan Franc",
            "symbol_native": "FR",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "RWF",
            "name_plural": "Rwandan francs"
        },
        "SAR": {
            "symbol_code": "SR",
            "name": "Saudi Riyal",
            "symbol_native": "ر.س.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SAR",
            "name_plural": "Saudi riyals"
        },
        "SDG": {
            "symbol_code": "SDG",
            "name": "Sudanese Pound",
            "symbol_native": "SDG",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SDG",
            "name_plural": "Sudanese pounds"
        },
        "SEK": {
            "symbol_code": "Skr",
            "name": "Swedish Krona",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SEK",
            "name_plural": "Swedish kronor"
        },
        "SGD": {
            "symbol_code": "S$",
            "name": "Singapore Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SGD",
            "name_plural": "Singapore dollars"
        },
        "SOS": {
            "symbol_code": "Ssh",
            "name": "Somali Shilling",
            "symbol_native": "Ssh",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "SOS",
            "name_plural": "Somali shillings"
        },
        "SYP": {
            "symbol_code": "SY£",
            "name": "Syrian Pound",
            "symbol_native": "ل.س.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "SYP",
            "name_plural": "Syrian pounds"
        },
        "THB": {
            "symbol_code": "฿",
            "name": "Thai Baht",
            "symbol_native": "฿",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "THB",
            "name_plural": "Thai baht"
        },
        "TND": {
            "symbol_code": "DT",
            "name": "Tunisian Dinar",
            "symbol_native": "د.ت.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "TND",
            "name_plural": "Tunisian dinars"
        },
        "TOP": {
            "symbol_code": "T$",
            "name": "Tongan Paʻanga",
            "symbol_native": "T$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TOP",
            "name_plural": "Tongan paʻanga"
        },
        "TRY": {
            "symbol_code": "TL",
            "name": "Turkish Lira",
            "symbol_native": "TL",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TRY",
            "name_plural": "Turkish Lira"
        },
        "TTD": {
            "symbol_code": "TT$",
            "name": "Trinidad and Tobago Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TTD",
            "name_plural": "Trinidad and Tobago dollars"
        },
        "TWD": {
            "symbol_code": "NT$",
            "name": "New Taiwan Dollar",
            "symbol_native": "NT$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TWD",
            "name_plural": "New Taiwan dollars"
        },
        "TZS": {
            "symbol_code": "TSh",
            "name": "Tanzanian Shilling",
            "symbol_native": "TSh",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "TZS",
            "name_plural": "Tanzanian shillings"
        },
        "UAH": {
            "symbol_code": "₴",
            "name": "Ukrainian Hryvnia",
            "symbol_native": "₴",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "UAH",
            "name_plural": "Ukrainian hryvnias"
        },
        "UGX": {
            "symbol_code": "USh",
            "name": "Ugandan Shilling",
            "symbol_native": "USh",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "UGX",
            "name_plural": "Ugandan shillings"
        },
        "UYU": {
            "symbol_code": "$U",
            "name": "Uruguayan Peso",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "UYU",
            "name_plural": "Uruguayan pesos"
        },
        "UZS": {
            "symbol_code": "UZS",
            "name": "Uzbekistan Som",
            "symbol_native": "UZS",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "UZS",
            "name_plural": "Uzbekistan som"
        },
        "VEF": {
            "symbol_code": "Bs.F.",
            "name": "Venezuelan Bolívar",
            "symbol_native": "Bs.F.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "VEF",
            "name_plural": "Venezuelan bolívars"
        },
        "VND": {
            "symbol_code": "₫",
            "name": "Vietnamese Dong",
            "symbol_native": "₫",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "VND",
            "name_plural": "Vietnamese dong"
        },
        "XAF": {
            "symbol_code": "FCFA",
            "name": "CFA Franc BEAC",
            "symbol_native": "FCFA",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "XAF",
            "name_plural": "CFA francs BEAC"
        },
        "XOF": {
            "symbol_code": "CFA",
            "name": "CFA Franc BCEAO",
            "symbol_native": "CFA",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "XOF",
            "name_plural": "CFA francs BCEAO"
        },
        "YER": {
            "symbol_code": "YR",
            "name": "Yemeni Rial",
            "symbol_native": "ر.ي.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "YER",
            "name_plural": "Yemeni rials"
        },
        "ZAR": {
            "symbol_code": "R",
            "name": "South African Rand",
            "symbol_native": "R",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ZAR",
            "name_plural": "South African rand"
        },
        "ZMK": {
            "symbol_code": "ZK",
            "name": "Zambian Kwacha",
            "symbol_native": "ZK",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "ZMK",
            "name_plural": "Zambian kwachas"
        }
    };


    //JSON: Data
    var currencyList = {
        "AED": "Arab Emirates Dirham",
        "AFN": "Afghanistan Afghani",
        "ALL": "Albanian Lek",
        "AMD": "Armenian Dram",
        "ANG": "Netherlands Antillean Guilder",
        "AOA": "Angolan Kwanza",
        "ARS": "Argentine Peso",
        "AUD": "Australian Dollar",
        "AWG": "Aruban Guilder",
        "AZN": "Azerbaijan New Manat",
        "BAM": "Bosnia-Herzegovina Convertible Mark",
        "BBD": "Barbados Dollar",
        "BDT": "Bangladeshi Taka",
        "BGN": "Bulgarian Lev",
        "BHD": "Bahraini Dinar",
        "BIF": "Burundi Franc",
        "BMD": "Bermudian Dollar",
        "BND": "Brunei Dollar",
        "BOB": "Boliviano",
        "BRL": "Brazilian Real",
        "BSD": "Bahamian Dollar",
        "BTN": "Bhutan Ngultrum",
        "BWP": "Botswana Pula",
        "BYR": "Belarussian Ruble",
        "BZD": "Belize Dollar",
        "CAD": "Canadian Dollar",
        "CDF": "Congolese Franc",
        "CHF": "Swiss Franc",
        "CLF": "Unidad de Fomento",
        "CLP": "Chilean Peso",
        "CNH": "Offshore Yuan Renminbi",
        "CNY": "Yuan Renminbi",
        "COP": "Colombian Peso",
        "CRC": "Costa Rican Colon",
        "CUP": "Cuban Peso",
        "CVE": "Cape Verde Escudo",
        "CZK": "Czech Koruna",
        "DJF": "Djibouti Franc",
        "DKK": "Danish Krone",
        "DOP": "Dominican Peso",
        "DZD": "Algerian Dinar",
        "EGP": "Egyptian Pound",
        "ERN": "Eritrean Nakfa",
        "ETB": "Ethiopian Birr",
        "EUR": "Euro",
        "FJD": "Fiji Dollar",
        "FKP": "Falkland Islands Pound",
        "GBP": "Pound Sterling",
        "GEL": "Georgian Lari",
        "GHS": "Ghanaian Cedi",
        "GIP": "Gibraltar Pound",
        "GMD": "Gambian Dalasi",
        "GNF": "Guinea Franc",
        "GTQ": "Guatemalan Quetzal",
        "GYD": "Guyana Dollar",
        "HKD": "Hong Kong Dollar",
        "HNL": "Honduran Lempira",
        "HRK": "Croatian Kuna",
        "HTG": "Haitian Gourde",
        "HUF": "Hungarian Forint",
        "IDR": "Indonesian Rupiah",
        "IEP": "Irish Pound (replaced by EUR)",
        "ILS": "Israeli New Shekel",
        "INR": "Indian Rupee",
        "IQD": "Iraqi Dinar",
        "IRR": "Iranian Rial",
        "ISK": "Iceland Krona",
        "JMD": "Jamaican Dollar",
        "JOD": "Jordanian Dinar",
        "JPY": "Japanese Yen",
        "KES": "Kenyan Shilling",
        "KGS": "Kyrgyzstani Som",
        "KHR": "Kampuchean Riel",
        "KMF": "Comoros Franc",
        "KPW": "North Korean Won",
        "KRW": "Korean Won",
        "KWD": "Kuwaiti Dinar",
        "KYD": "Cayman Islands Dollar",
        "KZT": "Kazakhstan Tenge",
        "LAK": "Lao Kip",
        "LBP": "Lebanese Pound",
        "LKR": "Sri Lanka Rupee",
        "LRD": "Liberian Dollar",
        "LSL": "Lesotho Loti",
        "LTL": "Lithuanian Litas",
        "LVL": "Latvian Lats",
        "LYD": "Libyan Dinar",
        "MAD": "Moroccan Dirham",
        "MDL": "Moldovan Leu",
        "MGA": "Malagasy Ariary",
        "MKD": "Macedonian Denar",
        "MMK": "Myanmar Kyat",
        "MNT": "Mongolian Tugrik",
        "MOP": "Macau Pataca",
        "MRO": "Mauritanian Ouguiya",
        "MUR": "Mauritius Rupee",
        "MVR": "Maldive Rufiyaa",
        "MWK": "Malawi Kwacha",
        "MXN": "Mexican Nuevo Peso",
        "MXV": "Mexican Unidad de Inversion",
        "MYR": "Malaysian Ringgit",
        "MZN": "Mozambique Metical",
        "NAD": "Namibian Dollar",
        "NGN": "Nigerian Naira",
        "NIO": "Nicaraguan Cordoba Oro",
        "NOK": "Norwegian Krone",
        "NPR": "Nepalese Rupee",
        "NZD": "New Zealand Dollar",
        "OMR": "Omani Rial",
        "PAB": "Panamanian Balboa",
        "PEN": "Peruvian Nuevo Sol",
        "PGK": "Papua New Guinea Kina",
        "PHP": "Philippine Peso",
        "PKR": "Pakistan Rupee",
        "PLN": "Polish Zloty",
        "PYG": "Paraguay Guarani",
        "QAR": "Qatari Rial",
        "RON": "Romanian New Leu",
        "RSD": "Serbian Dinar",
        "RUB": "Russian Ruble",
        "RWF": "Rwanda Franc",
        "SAR": "Saudi Riyal",
        "SBD": "Solomon Islands Dollar",
        "SCR": "Seychelles Rupee",
        "SDG": "Sudanese Pound",
        "SEK": "Swedish Krona",
        "SGD": "Singapore Dollar",
        "SHP": "St. Helena Pound",
        "SLL": "Sierra Leone Leone",
        "SOS": "Somali Shilling",
        "SRD": "Surinam Dollar",
        "STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
        "SVC": "El Salvador Colon",
        "SYP": "Syrian Pound",
        "SZL": "Swaziland Lilangeni",
        "THB": "Thai Baht",
        "TJS": "Tajik Somoni",
        "TMT": "Turkmenistani Manat",
        "TND": "Tunisian Dollar",
        "TOP": "Tongan Pa'anga",
        "TRY": "Turkish Lira",
        "TTD": "Trinidad and Tobago Dollar",
        "TWD": "Taiwan Dollar",
        "TZS": "Tanzanian Shilling",
        "UAH": "Ukraine Hryvnia",
        "UGX": "Uganda Shilling",
        "USD": "US Dollar",
        "UYU": "Uruguayan Peso",
        "UZS": "Uzbekistan Sum",
        "VEF": "Venezuelan Bolivar",
        "VND": "Vietnamese Dong",
        "VUV": "Vanuatu Vatu",
        "WST": "Samoan Tala",
        "XAF": "CFA Franc BEAC",
        "XAG": "Silver Ounce",
        "XAU": "Gold Ounce",
        "XBT": "Bitcoin",
        "XCD": "East Caribbean Dollar",
        "XCP": "Ounces of Copper",
        "XDR": "IMF Special Drawing Rights",
        "XOF": "CFA Franc BCEAO",
        "XPD": "Palladium Ounce",
        "XPF": "CFP Franc",
        "XPT": "Platinum Ounce",
        "YER": "Yemeni Rial",
        "ZAR": "South African Rand",
        "ZMW": "Zambian Kwacha",
        "ZWL": "Zimbabwe Dollar"
    }

    
    
    //Merge JSON currency data with the Country Infomationm to use in the app
    function mapCurrencyCodes(list, moreInfo) {
        var currencies = list || currencies,
            moreInfo = moreInfo || currencyInfo,
            currencyCodes;

        currencyCodes = Object.keys(currencies).map(function (e) {
            var code = [e][0];
            var info = moreInfo[code]

            var hasProperty = moreInfo.hasOwnProperty(code);

            var symbol = hasProperty ? info.symbol_code : code,
                symbol_native = hasProperty ? info.symbol_native : code;

            var curr = {
                currency: {
                    alphabetic_code: code,
                    country_name: currencies[e],
                    symbol: symbol,
                    symbol_native: symbol_native
                },
                code: [e][0]
            }

            //TEST
            return curr;

        });

        return currencyCodes;

    }

    var currencyCodes = mapCurrencyCodes(currencyList);

    var currenciesObj = currencyCodes.reduce(function (obj, k) {
        var key = k.code,
            value = k.currency

        obj[key] = value;
        return obj

    }, {});

    u.Data.currencyCodes = currencyCodes;
    
    u.Data.mapCurrencyCodes = mapCurrencyCodes;
    
    u.Data.getCurrencyInfo = function (e) {

        var e = e ? e.toUpperCase() : undefined;

        return e ? currenciesObj.hasOwnProperty(e) ? currenciesObj[e] : 'no such country' : currencyCodes;

    }

    //TEST    
    console.log(u.Data.getCurrencyInfo('usd'));

})(UTILS);