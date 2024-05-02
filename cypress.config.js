const { defineConfig } = require("cypress");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://app.todoist.com",
        baseAPIHost: "https://api.todoist.com",
        baseAPIToken: "0715eb2626bb2ba1b083e8e5d5b8d3824c8c1038",
        defaultCommandTimeout: 15000,
        reporter: "cypress-mochawesome-reporter",
        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on);
            cypressSplit(on, config);
            return config;
        },
    },
});
