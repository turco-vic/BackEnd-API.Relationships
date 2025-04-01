const pool = require("../config/database");

const getWizards = async () => {
    const result = await pool.query(
        `SELECT wizards.*, houses.name AS house_name 
         FROM wizards 
         LEFT JOIN houses ON wizards.house_id = houses.id`
    );
    return result.rows;
};

const getWizardById = async (id) => {
    const result = await pool.query(
        `SELECT wizards.*, houses.name AS house_name 
         FROM wizards 
         LEFT JOIN houses ON wizards.house_id = houses.id 
         WHERE wizards.id = $1`, [id]
    );
    return result.rows[0];
};

const createWizard = async (name, house_id) => {
    const result = await pool.query(
        "INSERT INTO wizards (name, house_id) VALUES ($1, $2) RETURNING *",
        [name, house_id]
    );
    return result.rows[0];
};

const updateWizard = async ( name, id ) => {
    const result = await pool.query(
        "UPDATE wizards SET name = $1 WHERE id = $2 RETURNING *",
        [name, id]
    );
    return result.rows[0];
};

const deleteWizard = async (id) => {
    const result = await pool.query("DELETE FROM wizards WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Bruxo não encontrado!" };
    }
};

module.exports = { getWizards, getWizardById, createWizard, updateWizard, deleteWizard };
