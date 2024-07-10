const express = require('express');
const menuController = require('../controllers/menu');
const multiparty = require('connect-multiparty');

const md_upload = multiparty({uploadDir: './uploads/menu'})


const api = express.Router();

api.post('/menu', [md_upload], menuController.createMenu);

module.exports = api;