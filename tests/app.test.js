const App = require('../src/app.js');

describe('App', () => {
    it('to return hello world message', () => {
        const app = new App();
        expect(app.message).toBe("Hello World!");
    });
})
