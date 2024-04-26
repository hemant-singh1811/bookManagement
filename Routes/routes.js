const express = require("express");
const router = express.Router();
const controller = require("../Controllers/controller");
const {schemaValidator} = require('../schemaValidator/schemaValidator')
const schemaModel = require('../schemaValidator/schemaModel');
const { authToken } = require("../Services/auth")


router.get("/", (req, res) => {
    res.send("I Can Hear You");
});



/**
 * @swagger
 * /login:
 *   post:
 *     summary: login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               password:
 *                 type: string 
 *     responses:
 *       '200':
 *         description: Logged In
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'local'
 *       '404':
 *         description: Bad Request
 */
router.post(
    "/login",
    schemaValidator(schemaModel.userLogin),
    controller.userLogin
)


/**
 * @swagger
 * /books?userToken='':
 *   post:
 *     summary: Create a new book entry and send userToken in query as userToken
 *     parameters:
 *       - in: query
 *         name: userToken
 *         required: true
 *         schema:
 *          type: String
 *          default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoZW1hbnRzaW5naDE4NTIiLCJ1c2VyTmFtZSI6ImhlbWFudHNpbmdoMTg1MiIsImlhdCI6MTcxNDAzOTYzNH0.HgGExf1ZLK7DADvqG_Tpne1bLV43wstSdBiBwyWOXDI
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publicationYear:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: ''
 *       '400':
 *         description: Bad Request
 */
router.post(
    '/books',
    authToken,
    schemaValidator(schemaModel.createBook),
    controller.createBook
);

/**
 * @swagger
 * /books?userToken='':
 *   get:
 *     summary: Get all book entries and send userToken in query as userToken'
 *     parameters:
 *       - in: query
 *         name: userToken
 *         required: true
 *         schema:
 *          type: String
 *          default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoZW1hbnRzaW5naDE4NTIiLCJ1c2VyTmFtZSI6ImhlbWFudHNpbmdoMTg1MiIsImlhdCI6MTcxNDAzOTYzNH0.HgGExf1ZLK7DADvqG_Tpne1bLV43wstSdBiBwyWOXDI
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: ''
 *       '500':
 *         description: Internal Server Error
 */
router.get(
    '/books',
    authToken,
    controller.getBooks
);

/**
 * @swagger
 * /getFilteredBooks?author=hemant&publicationYear=2020&userToken='':
 *   get:
 *     summary: Get all book entries and send userToken in query as userToken
 *     parameters:
 *       - in: query
 *         name: userToken
 *         required: true
 *         schema:
 *          type: String
 *          default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoZW1hbnRzaW5naDE4NTIiLCJ1c2VyTmFtZSI6ImhlbWFudHNpbmdoMTg1MiIsImlhdCI6MTcxNDAzOTYzNH0.HgGExf1ZLK7DADvqG_Tpne1bLV43wstSdBiBwyWOXDI
 *       - in: query
 *         name: author
 *         required: false
 *         schema:
 *          type: String
 *          default: hemant
 *       - in: query
 *         name: publicationYear
 *         required: false
 *         schema:
 *          type: integer
 *          default: 2020
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: ''
 *       '500':
 *         description: Internal Server Error
 */
router.get(
    '/getFilteredBooks',
    authToken,
    controller.getFilteredBooks
);


/**
 * @swagger
 * /books/{id}?userToken='':
 *   get:
 *     summary: Get a specific book entry by ID and send userToken in query as userToken
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: userToken
 *         required: true
 *         schema:
 *          type: String
 *          default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoZW1hbnRzaW5naDE4NTIiLCJ1c2VyTmFtZSI6ImhlbWFudHNpbmdoMTg1MiIsImlhdCI6MTcxNDAzOTYzNH0.HgGExf1ZLK7DADvqG_Tpne1bLV43wstSdBiBwyWOXDI
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: ''
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */
router.get(
    '/books/:id',
    authToken,
    schemaValidator(schemaModel.getBookInfo),
    controller.getBookInfo
);



/**
 * @swagger
 * /books/{id}?userToken='':
 *   put:
 *     summary: Update a book entry by ID and send userToken in query as userToken
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: userToken
 *         required: true
 *         schema:
 *          type: String
 *          default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoZW1hbnRzaW5naDE4NTIiLCJ1c2VyTmFtZSI6ImhlbWFudHNpbmdoMTg1MiIsImlhdCI6MTcxNDAzOTYzNH0.HgGExf1ZLK7DADvqG_Tpne1bLV43wstSdBiBwyWOXDI
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publicationYear:
 *                 type: number
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: ''
 *       '404':
 *         description: Not Found
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 */
router.put(
    '/books/:id',
    authToken,
    schemaValidator(schemaModel.updateBook),
    controller.updateBook
);



/**
 * @swagger
 * /books/{id}?userToken='':
 *   delete:
 *     summary: Delete a book entry by ID and send userToken in query as userToken
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: userToken
 *         required: true
 *         schema:
 *          type: String
 *          default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoZW1hbnRzaW5naDE4NTIiLCJ1c2VyTmFtZSI6ImhlbWFudHNpbmdoMTg1MiIsImlhdCI6MTcxNDAzOTYzNH0.HgGExf1ZLK7DADvqG_Tpne1bLV43wstSdBiBwyWOXDI
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: ''
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */
router.delete(
    '/books/:id',
    authToken,
    schemaValidator(schemaModel.deleteBook),
    controller.deleteBook
);




router.all("*", (req, res) => {
    res.status(404).send({ statusCode: 404, data: {}, message: "Path Not Found" })
})


module.exports = router;