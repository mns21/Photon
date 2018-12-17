var mongoose = require('mongoose');

var deviceSchema = mongoose.Schema({
    "id": String,
    "name": String,
    "last_app": String,
    "last_ip_address": String,
    "last_heard": Date,
    "product_id": Number,
    "connected": Boolean,
    "platform_id": Number,
    "cellular": Boolean,
    "notes": String,
    "status": String,
    "serial_number": String,
    "current_build_target": String,
    "system_firmware_version": String,
    "default_build_target": String,
});
// je crée un model et j'attache le schema ci dessus
var Devices = mongoose.model('Devices', deviceSchema);

module.exports = Devices;