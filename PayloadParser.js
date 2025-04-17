function parseUplink(device, payload) {

    var data = payload.asBytes()
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].toString(2).padStart(8, '0');
        // env.log(data[i])
    }

    if (data[0] == 0x01) {
        

         //* Declarar las variables en el ámbito superior del bloque if
        let dataUpdatedMMVL1, dataUpdatedMMVL2, dataUpdatedMMVL3;
        let dataUpdatedMMIL1, dataUpdatedMMIL2, dataUpdatedMMIL3;
        let dataUpdatedMMCFL1, dataUpdatedMMCFL2, dataUpdatedMMCFL3;


        //*Update Port 1 endpoints --------------------------------------------------------------------------------

        var e = device.endpoints.byAddress("1.1");
        if (e != null){
            var dataUpdated = parseInt(data[1] + data[2] + data[3] + data[4], 2)
            dataUpdatedMMVL1 = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMMVL1);
        }
        var e = device.endpoints.byAddress("1.2");
        if (e != null){
            var dataUpdated = parseInt(data[5] + data[6] + data[7] + data[8], 2)
            dataUpdatedMMVL2 = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMMVL2);
        }
        var e = device.endpoints.byAddress("1.3");
        if (e != null){
            var dataUpdated = parseInt(data[9] + data[10] + data[11] + data[12], 2)
            dataUpdatedMMVL3 = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMMVL3);
        }
        var e = device.endpoints.byAddress("1.4");
        if (e != null){ 
            var dataUpdated = parseInt(data[13] + data[14] + data[15] + data[16], 2)
            dataUpdatedMMIL1 = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMMIL1);
        }
        var e = device.endpoints.byAddress("1.5"); 
        if (e != null){
            var dataUpdated = parseInt(data[17] + data[18] + data[19] + data[20], 2)
            dataUpdatedMMIL2 = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMMIL2);
        }
        var e = device.endpoints.byAddress("1.6");
        if (e != null){
            var dataUpdated = parseInt(data[21] + data[22] + data[23] + data[24], 2)
            dataUpdatedMMIL3 = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMMIL3);
        }
        var e = device.endpoints.byAddress("1.7");
        if (e != null){
            var dataUpdated = parseInt(data[25] + data[26] + data[27] + data[28], 2)
            var dataUpdatedMM = dataUpdated / 1000
           e.updateFrequencySensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("1.8");
        if (e != null){
            var dataUpdated = parseInt(data[29] + data[30] + data[31] + data[32], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateActivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.9");
        if (e != null){
            var dataUpdated = parseInt(data[33] + data[34] + data[35] + data[36], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateReactivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("1.10");
        if (e != null){
            var dataUpdated = parseInt(data[37] + data[38] + data[39] + data[40], 2)
            var dataUpdatedMM = dataUpdated / 10
            e.updateGenericSensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("1.11");
        if (e != null){
            // var dataUpdated = parseInt(data[41] + data[42] + data[43] + data[44], 2)
            // var dataUpdatedMM = dataUpdated / 1000
            var bin = data[41] + data[42] + data[43] + data[44];
            var dataUpdated = bin32ToSignedDecimal(bin);
            dataUpdatedMMCFL1 = dataUpdated / 1000;
            e.updateCosPhiSensorStatus(dataUpdatedMMCFL1);
        }
        var e = device.endpoints.byAddress("1.12");
        if (e != null){
            // var dataUpdated = parseInt(data[45] + data[46] + data[47] + data[48], 2)
            // var dataUpdatedMM = dataUpdated / 1000
            var bin = data[45] + data[46] + data[47] + data[48];
            var dataUpdated = bin32ToSignedDecimal(bin);
            dataUpdatedMMCFL2 = dataUpdated / 1000;
            e.updateCosPhiSensorStatus(dataUpdatedMMCFL2);
        }
        var e = device.endpoints.byAddress("1.13");
        if (e != null){
            // var dataUpdated = parseInt(data[49] + data[50] + data[51] + data[52], 2)
            //var dataUpdatedMM = dataUpdated / 1000
            ///e.updateCosPhiSensorStatus(dataUpdatedMM);
            var bin = data[49] + data[50] + data[51] + data[52];
            var dataUpdated = bin32ToSignedDecimal(bin);
            dataUpdatedMMCFL3 = dataUpdated / 1000;
            e.updateCosPhiSensorStatus(dataUpdatedMMCFL3);
            env.log(dataUpdatedMMCFL3)
        }
        var e = device.endpoints.byAddress("1.14");
        if (e != null){
            var dataUpdatedP1 = dataUpdatedMMVL1 * dataUpdatedMMIL1 * Math.abs(dataUpdatedMMCFL1);
            var dataUpdatedP2 = dataUpdatedMMVL2 * dataUpdatedMMIL2 * Math.abs(dataUpdatedMMCFL2);
            var dataUpdatedP3 = dataUpdatedMMVL3 * dataUpdatedMMIL3 * Math.abs(dataUpdatedMMCFL3);
            var dataUpdatedMMPT = dataUpdatedP1 + dataUpdatedP2 + dataUpdatedP3;
            e.updateActivePowerSensorStatus(dataUpdatedMMPT);
            env.log(dataUpdatedMMPT)
        }
    } else {

        //*Update Port 2 endpoints --------------------------------------------------------------------------------

        var e = device.endpoints.byAddress("2.1");
        if (e != null){
            var dataUpdated = parseInt(data[1] + data[2] + data[3] + data[4], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.2");
        if (e != null){
            var dataUpdated = parseInt(data[5] + data[6] + data[7] + data[8], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.3");
        if (e != null){
            var dataUpdated = parseInt(data[9] + data[10] + data[11] + data[12], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateVoltageSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.4");
        if (e != null){ 
            var dataUpdated = parseInt(data[13] + data[14] + data[15] + data[16], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.5"); 
        if (e != null){
            var dataUpdated = parseInt(data[17] + data[18] + data[19] + data[20], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.6");
        if (e != null){
            var dataUpdated = parseInt(data[21] + data[22] + data[23] + data[24], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCurrentSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.7");
        if (e != null){
            var dataUpdated = parseInt(data[25] + data[26] + data[27] + data[28], 2)
            var dataUpdatedMM = dataUpdated / 1000
            e.updateFrequencySensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("2.8");
        if (e != null){
            var dataUpdated = parseInt(data[29] + data[30] + data[31] + data[32], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateActivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.9");
        if (e != null){
            var dataUpdated = parseInt(data[33] + data[34] + data[35] + data[36], 2)
            var dataUpdatedMM = dataUpdated * 100
            e.updateReactivePowerSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.10");
        if (e != null){
            var dataUpdated = parseInt(data[37] + data[38] + data[39] + data[40], 2)
            var dataUpdatedMM = dataUpdated / 10
            e.updateGenericSensorStatus(dataUpdatedMM);
        }   
        var e = device.endpoints.byAddress("2.11");
        if (e != null){
            var dataUpdated = parseInt(data[41] + data[42] + data[43] + data[44], 2)
            var dataUpdatedMM = bin32decimal(dataUpdated) / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.12");
        if (e != null){
            var dataUpdated = parseInt(data[45] + data[46] + data[47] + data[48], 2)
            var dataUpdatedMM = bin32decimal(dataUpdated) / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
        var e = device.endpoints.byAddress("2.13");
        if (e != null){
            var dataUpdated = bin32decimal(data[49] + data[50] + data[51] + data[52])
            var dataUpdatedMM = dataUpdated / 1000
            e.updateCosPhiSensorStatus(dataUpdatedMM);
        }
    }
}

function bin32decimal(bin) {
  if (bin.length !== 32) {
    throw new Error("La cadena binaria debe tener 32 bits.");
  }

  // Verificar si el número es negativo
  var isNegative = bin[0] === '1';

  // Convertir la cadena binaria a un entero de 32 bits
  var bits = parseInt(bin, 2);

  // Si el número es negativo, convertir a complemento a 2
  if (isNegative) {
    bits = bits - Math.pow(2, 32);
  }

  // Extraer el bit de signo
  var sign = (bits >>> 31) === 0 ? 1.0 : -1.0;

  // Extraer el exponente (bits 30-23)
  var exponent = (bits >>> 23) & 0xff;

  // Extraer la mantisa (bits 22-0)
  var mantissa = exponent === 0 ? (bits & 0x7fffff) << 1 : (bits & 0x7fffff) | 0x800000;

  // Calcular el valor en punto flotante
  var float = sign * mantissa * Math.pow(2, exponent - 127 - 23);

  return float;
}

function bin32ToSignedDecimal(bin) {
  if (bin.length !== 32) {
    throw new Error("La cadena binaria debe tener 32 bits.");
  }

  // Verificar si el número es negativo
  var isNegative = bin[0] === '1';

  // Convertir la cadena binaria a un entero de 32 bits
  var bits = parseInt(bin, 2);

  // Si el número es negativo, convertir a complemento a 2
  if (isNegative) {
    bits = bits - Math.pow(2, 32);
  }

  return bits;
}
