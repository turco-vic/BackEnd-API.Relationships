const apiKeyMiddleware = (req, res, next) => {
    const clientKey = req.headers['x-api-key'];
    const serverKey = process.env.API_KEY;

    if (!clientKey) {
        return res.status(401).json({ error: "Chave da API não fornecida!" })
    }
    if (clientKey !== serverKey) {
        return res.status(403).json({ error: "Chave da API incorreta! Sem autorização." })
    }

    next(); // Passou pode continuar!

};

module.exports = apiKeyMiddleware;