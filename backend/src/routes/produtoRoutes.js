const express = require('express')

const router = express.Router()

const produtoController =
    require('../controllers/produtoController')

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 */
router.get('/', produtoController.listar)

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sku:
 *                 type: string
 *               nome:
 *                 type: string
 *               largura:
 *                 type: number
 *               altura:
 *                 type: number
 *               comprimento:
 *                 type: number
 *               peso:
 *                 type: number
 *     responses:
 *       201:
 *         description: Produto criado
 */
router.post('/', produtoController.criar)

module.exports = router