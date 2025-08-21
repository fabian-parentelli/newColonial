function numberToWords(n) {
    const units = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const teens = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const tens = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const hundreds = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    if (n === 0) return "cero";
    if (n === 100) return "cien";
    if (n < 10) return units[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " y " + units[n % 10] : "");
    if (n < 1000) return hundreds[Math.floor(n / 100)] + (n % 100 !== 0 ? " " + numberToWords(n % 100) : "");

    if (n < 1000000) { 
        const thousands = Math.floor(n / 1000);
        const remainder = n % 1000;
        const thousandText = thousands === 1 ? "mil" : numberToWords(thousands) + " mil";
        return thousandText + (remainder !== 0 ? " " + numberToWords(remainder) : "");
    }

    if (n < 1000000000) {
        const millions = Math.floor(n / 1000000);
        const remainder = n % 1000000;
        const millionText = millions === 1 ? "un millón" : numberToWords(millions) + " millones";
        return millionText + (remainder !== 0 ? " " + numberToWords(remainder) : "");
    }

    return "Número fuera de rango";
}

export { numberToWords };