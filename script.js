var newman = require('newman');

newman.run({
    collection: './collection/backtest.json',
    environment: './environment/environment.json',
    globals: './globals/qaAcademy.postman_globals.json',
    reporters: ['cli', 'html']


}, process.exit);