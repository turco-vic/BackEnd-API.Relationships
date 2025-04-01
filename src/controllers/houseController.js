const houseModel = require("../models/houseModel");

const getAllHouses = async (req, res) => {
    try {
        const houses = await houseModel.getHouses();
        res.json(houses);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar casas!" });
    }
};

const getHouse = async (req, res) => {
    try {
        const house = await houseModel.getHouseById(req.params.id);
        if (!house) {
            return res.status(404).json({ message: "Casa não encontrada!" });
        }
        res.json(house);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar casa!" });
    }
};

const createHouse = async (req, res) => {
    try {
        const { name, founder } = req.body;
        const newHouse = await houseModel.createHouse(name, founder);
        res.status(201).json(newHouse);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") {
            return res.status(400).json({ message: "Fundador já cadastrado!" });
        }
        res.status(500).json({ message: "Erro ao criar casa!" });
    }
};

const updateHouse = async (req, res) => {
    try {
        const { name, founder } = req.body;
        const updatedHouse = await houseModel.updateHouse(req.params.id, name, founder);
        if (!updatedHouse) {
            return res.status(404).json({ message: "Casa não encontrada!" });
        }
        res.json(updatedHouse);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar casa!" });
    }
};

const deleteHouse = async (req, res) => {
    try {
        const message = await houseModel.deleteHouse(req.params.id);
        res.json({message: "Casa deletada com sucesso!"});
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar casa!" });
    }
};

module.exports = { getAllHouses, getHouse, createHouse, updateHouse, deleteHouse };
