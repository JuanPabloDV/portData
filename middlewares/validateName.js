const validateName = (req, res, next) => {
  const { nome } = req.body;

  if (!nome || typeof nome !== "string") {
    return res.status(400).json({
      error: "Nome é obrigatório e deve ser uma string",
    });
  }

  const words = nome.trim().split(/\s+/);

  if (words.length < 2) {
    return res.status(400).json({
      error: "O nome deve conter no mínimo 2 palavras",
    });
  }

  const validWords = words.every((word) => word.length >= 3);

  if (!validWords) {
    return res.status(400).json({
      error: "Cada palavra do nome deve ter no mínimo 3 letras",
    });
  }

  next();
};

module.exports = validateName;