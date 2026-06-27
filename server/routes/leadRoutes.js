const express = require("express");

const router = express.Router();

const {
    addLead,
    getLeads,
    deleteLead,
    updateStatus
} = require("../controllers/leadController");

router.post("/", addLead);

router.get("/", getLeads);

router.delete("/:id", deleteLead);

router.put("/:id", updateStatus);

module.exports = router;