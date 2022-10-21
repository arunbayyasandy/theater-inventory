const events = require("./events.json");

module.exports = function () {
    return events.map((event) => ({
        label: event.name,
        value: event.value
    }));
};