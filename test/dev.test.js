// todo

var assert = require('assert');
const dev = require('../lib/dev');
const http = require('http');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            let targetDir = __dirname, host = '0.0.0.0', port = '3000';
            let server = new dev.Dev(targetDir, { host, port }).start();
            server.then(function () {
                http.get('http://127.0.0.1:3000', (response) => {
                    let todo = '';

                    // called when a data chunk is received.
                    response.on('data', (chunk) => {
                        todo += chunk;
                    });

                    // called when the complete response is received.
                    response.on('end', (res) => {
                        console.log(res, 7777777);
                    });

                }).on("error", (error) => {
                    console.log("Error: " + error.message);
                });

                assert.equal([1, 2, 3].indexOf(4), -1);
            })

        });
    });
});