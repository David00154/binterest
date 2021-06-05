const express = require("express");
const supabase = require("../config/database");

const router = express.Router();

router.get('/', (req, res) => {
	res.show('routes/admin/index', {layout: "layouts/admin", title: "Dashboard"})
})

router.get('/deposit', (req, res) => {
	res.show('routes/admin/deposit', {layout: "layouts/admin", title: "Deposit"})
})

const adminHandler = router;

module.exports = adminHandler;