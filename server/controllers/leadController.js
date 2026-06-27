const db = require("../db/db");

const addLead = (req, res) => {

    const { name, email, source } = req.body;

    const sql = `
        INSERT INTO leads (name, email, source)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, source], (err, result) => {

        if (err) {

            console.log(err);

            res.status(500).json({
                message: "Error adding lead"
            });

        } else {

            res.status(201).json({
                message: "Lead added successfully"
            });
        }
    });
};

const getLeads = (req, res) => {

    const sql = "SELECT * FROM leads";

    db.query(sql, (err, results) => {

        if (err) {

            console.log(err);

            res.status(500).json({
                message: "Error fetching leads"
            });

        } else {

            res.status(200).json(results);
        }
    });
};

const deleteLead = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM leads WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {

            console.log(err);

            res.status(500).json({
                message: "Error deleting lead"
            });

        } else {

            res.status(200).json({
                message: "Lead deleted successfully"
            });
        }
    });
};
const updateStatus = (req, res) => {

    const { id } = req.params;

    const { status } = req.body;

    const sql = `
        UPDATE leads
        SET status = ?
        WHERE id = ?
    `;

    db.query(sql, [status, id], (err, result) => {

        if (err) {

            console.log(err);

            res.status(500).json({
                message: "Error updating status"
            });

        } else {

            res.status(200).json({
                message: "Status updated"
            });
        }
    });
};
module.exports = {
    addLead,
    getLeads,
    deleteLead,
    updateStatus
};