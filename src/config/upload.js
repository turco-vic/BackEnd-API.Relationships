// Importa o módulo 'multer' para lidar com upload de arquivos
const multer = require("multer");

// Importa o módulo 'path' para lidar com caminhos de arquivos
const path = require("path");

// Configura onde e como os arquivos enviados serão armazenados
const storage = multer.diskStorage({
    // Define a pasta onde os arquivos serão salvos
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Pasta "uploads" na raiz do projeto
    },
    // Define o nome do arquivo salvo
    filename: (req, file, cb) => {
        // Cria um nome único com a data atual + nome original do arquivo
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName); // Ex: 1618597654321-imagem.png
    },
});

// Cria o middleware do multer com configurações de armazenamento e filtro
const upload = multer({
    storage, // Usa a configuração de armazenamento definida acima

    // Filtro para aceitar apenas arquivos com extensão de imagem
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname); // Pega a extensão do arquivo
        // Verifica se a extensão é .jpg, .jpeg ou .png
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            // Rejeita o upload se não for imagem
            return cb(new Error("Apenas imagens são permitidas: JPG, JPEG e PNG"));
        }
        cb(null, true); // Aceita o upload
    }
});

// Exporta o middleware 'upload' para ser usado em outras partes da aplicação
module.exports = upload;
