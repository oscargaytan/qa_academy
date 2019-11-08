# qa_academy

## Requirements
1. [Postman APP](https://www.getpostman.com/downloads/)
2. [NodeJS](https://nodejs.org/en/)

## Usage in Postman APP
1. Go to File/Import...
2. Select collection file
3. Go to Manage environments (gear in up right side inside User Interface)
4. Click on Import
5. Select environment
6. Run `Login` request to refresh your token.

## Installation for headless
1. Open project in terminal
2. Run 
```
npm install
```
3. Once `node_modules` are installed you can run scripts by running
```
node script.js
```

## Continous integration
You can implement testing by running
```
test.sh
```
Only Node is needed for this approach.
