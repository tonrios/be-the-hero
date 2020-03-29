const connection = require('../database/connection')


module.exports = {

    async create(request, respose) {
        const ong_id = request.headers.authorization;

        const ong = await connection('ongs')
            .where('id', ong_id)
            .select('name').
            first();

        if (!ong) {
            return respose.status(400).json({ error: "nao encontrado" })
        }

        return respose.json(ong);
    },

}