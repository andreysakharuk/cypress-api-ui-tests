const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://todoist.com/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
