function getConfiguration(config)  { 
    config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}

function getEndpoints(deviceAddress, endpoints) {
    //Endpoints Port 1
    endpoints.addEndpoint("1.1", "Port 1 - VL1_N", endpointType.voltageSensor);
    endpoints.addEndpoint("1.2", "Port 1 - VL2_N", endpointType.voltageSensor);
    endpoints.addEndpoint("1.3", "Port 1 - VL3_N", endpointType.voltageSensor); 
    endpoints.addEndpoint("1.4", "Port 1 - I_L1", endpointType.currentSensor);
    endpoints.addEndpoint("1.5", "Port 1 - I_L2", endpointType.currentSensor);
    endpoints.addEndpoint("1.6", "Port 1 - I_L3", endpointType.currentSensor);
    endpoints.addEndpoint("1.7", "Port 1 - F", endpointType.frequencyMeter);
    endpoints.addEndpoint("1.8", "Port 1 - KWh_Sys", endpointType.activePowerSensor);
    endpoints.addEndpoint("1.9", "Port 1 - KVArh_Sys", endpointType.reactivePowerSensor);
    var em = endpoints.addEndpoint("1.10", "Port 1 - Energy_multiplier", endpointType.genericSensor);
    em.variableTypeId = 1069
    endpoints.addEndpoint("1.11", "Port 1 - CosPhi_L1", endpointType.cosPhiSensor);
    endpoints.addEndpoint("1.12", "Port 1 - CosPhi_L2", endpointType.cosPhiSensor);
    endpoints.addEndpoint("1.13", "Port 1 - CosPhi_L3", endpointType.cosPhiSensor);
    endpoints.addEndpoint("1.14", "Port 1 - KW_Inst", endpointType.activePowerSensor);

    //Endpoints Port 2	
    endpoints.addEndpoint("2.1", "Port 2 - VL1_N", endpointType.voltageSensor);
    endpoints.addEndpoint("2.2", "Port 2 - VL2_N", endpointType.voltageSensor);
    endpoints.addEndpoint("2.3", "Port 2 - VL3_N", endpointType.voltageSensor); 
    endpoints.addEndpoint("2.4", "Port 2 - I_L1", endpointType.currentSensor);
    endpoints.addEndpoint("2.5", "Port 2 - I_L2", endpointType.currentSensor);
    endpoints.addEndpoint("2.6", "Port 2 - I_L3", endpointType.currentSensor);
    endpoints.addEndpoint("2.7", "Port 2 - F", endpointType.frequencyMeter);
    endpoints.addEndpoint("2.8", "Port 2 - KWh_Sys", endpointType.activePowerSensor);
    endpoints.addEndpoint("2.9", "Port 2 - KVArh_Sys", endpointType.reactivePowerSensor);
    var em = endpoints.addEndpoint("2.10", "Port 2 - Energy_multiplier", endpointType.genericSensor);
    em.variableTypeId = 1069
    endpoints.addEndpoint("2.11", "Port 2 - CosPhi_L1", endpointType.cosPhiSensor);
    endpoints.addEndpoint("2.12", "Port 2 - CosPhi_L2", endpointType.cosPhiSensor);
    endpoints.addEndpoint("2.13", "Port 2 - CosPhi_L3", endpointType.cosPhiSensor);
    endpoints.addEndpoint("2.14", "Port 2 - KW_Inst", endpointType.activePowerSensor);
}
  
function validateDeviceAddress(address, result) {
    address = address.toLowerCase();
    result.ok = true;
    if (address.length == 16) { 
        var validchars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', '', 'c', 'd', 'e', 'f'];
        for (var i = 0; i < address.length; i++) {
            if (!validchars.includes(address.charAt(i))) {
                result.ok = false;
                break;
            }
        }
    }
    else {
        result.ok = false;
    }
    if (!result.ok)
        result.errorMessage = {
            en: "The address must be 16 characters long and only have hexadecimal characters", 
            es: "La dirección debe tener 16 caracteres y tener sólo caracteres hexadecimales"
        };
      
}
  
  
function updateDeviceUIRules(device, rules) {
    rules.canCreateEndpoints = true;
    //No fueron especificadas reglas para los dispositivos
}
  
  
function updateEndpointUIRules(endpoint, rules) {
    rules.canDelete = true;
    //No fueron especificadas reglas para los endpoints
}
