var request = require('request');
var config = require('../../config');

describe('server', function() {
    it("should response form json", function(done) {
        request('http://' + config.host + ':' + config.port + '/form/1', function(error, response) {
            expect(response.body).toMatch(/nextFields":\["money\-toolittle\-submit"\]\},\{"label":"I\'ve got too much/);
            done();
        });
    });
});