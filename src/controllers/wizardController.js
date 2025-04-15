const wizardModel = require("../models/wizardModel");

const getAllWizards = async (req, res) => {
    try {
        const wizards = await wizardModel.getWizards();
        res.json(wizards);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxos!" });
    }
};

const getWizard = async (req, res) => {
    try {
        const wizard = await wizardModel.getWizardById(req.params.id);
        if (!wizard) {
            return res.status(404).json({ message: "Bruxo não encontrado!" });
        }
        res.json(wizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxo!" });
    }
};

const createWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newWizard = await wizardModel.createWizard(name, house_id, photo);
        res.status(201).json(newWizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar bruxo!" });
    }
};

const updateWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const updateWizard = await wizardModel.updateWizard(req.params.id, name, house_id);
        if (!updateWizard) {
            return res.status(404).json({ message: "Bruxo não encontrado!" });
        }
        res.json(updateWizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Bruxo!" });
    }
};

const deleteWizard = async (req, res) => {
    try {
        const message = await wizardModel.deleteWizard(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Bruxo!" });
    }
};

module.exports = { getAllWizards, getWizard, createWizard, updateWizard, deleteWizard };
