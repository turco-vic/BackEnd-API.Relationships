const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController");
const upload = require("../config/upload.js"); // crie a pasta middleware e o arquivo upload.js
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);
/**
 * @swagger
 * tags:
 *   name: Wizards
 *   description: Gerenciamento de bruxos
 */


/**
 * @swagger
 * /api/wizards:
 *   get:
 *     summary: Lista todos os bruxos
 *     tags: [Wizards]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de bruxos
 */
router.get("/", wizardController.getAllWizards);

router.get("/:id", wizardController.getWizard);


// Criar bruxo
router.post("/", upload.single("photo"), wizardController.createWizard);


router.put("/:id", wizardController.updateWizard);
router.delete("/:id", wizardController.deleteWizard);

module.exports = router;
