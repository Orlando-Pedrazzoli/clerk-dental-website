import multer from 'multer';

// Configuração do Multer para usar memória (buffer)
const storage = multer.memoryStorage();

// Filtro para aceitar imagens e PDFs
const fileFilter = (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Aceitar imagens e PDFs
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Apenas imagens (JPG, PNG, GIF, WEBP) e PDFs são permitidos!'));
  }
};

// Configuração do upload
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB máximo
  },
});