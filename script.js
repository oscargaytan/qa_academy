var newman = require('newman');

newman.run({
    collection: './collection/qaAcademy_test.postman_collection.json',
    environment: './environment/qaAcademy.postman_environment.json',
    // globals: './globals/qaAcademy.postman_globals.json',
    reporters: ['cli', 'html']


}, process.exit);