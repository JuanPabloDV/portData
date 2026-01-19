const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ContactController {
  static async create(req, res) {
    const { name, phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: 'Telefone é obrigatório' });
    }

    const contact = await prisma.contact.create({
      data: { name, phone }
    });

    res.status(201).json({
      message: 'Contato criado com sucesso',
      contact
    });
  }

  static async list(req, res) {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(contacts);
  }

  static async findById(req, res) {
    const { id } = req.params;
    const contact = await prisma.contact.findUnique({
      where: { id: parseInt(id) }
    });

    if (!contact) {
      return res.status(404).json({ error: 'Contato não encontrado' });
    }

    res.json(contact);
  }

  static async update(req, res) {
    const { id } = req.params;
    const { name, phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: 'Telefone é obrigatório' });
    }

    const contact = await prisma.contact.update({
      where: { id: parseInt(id) },
      data: { name, phone }
    });

    res.json({
      message: 'Contato atualizado com sucesso',
      contact
    });
  }

  static async delete(req, res) {
    const { id } = req.params;
    
    await prisma.contact.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Contato deletado com sucesso' });
  }
}

module.exports = ContactController;