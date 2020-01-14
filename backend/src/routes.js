const { Router } = require('express');

const routes = Router();

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello word' });
});

module.exports = routes;