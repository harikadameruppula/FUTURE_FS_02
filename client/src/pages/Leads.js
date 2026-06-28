import { useEffect, useState } from "react";
import API from "../services/api";

function Leads() {

    const [leads, setLeads] = useState([]);
    const [search, setSearch] = useState("");

    const fetchLeads = async () => {

        try {

            const response = await API.get("/leads");

            setLeads(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchLeads();

    }, []);

    const handleDelete = async (id) => {

        try {

            await API.delete(`/leads/${id}`);

            fetchLeads();

        } catch (error) {

            console.log(error);
        }
    };

    const handleStatusChange = async (id, status) => {

        try {

            await API.put(`/leads/${id}`, {
                status
            });

            fetchLeads();

        } catch (error) {

            console.log(error);
        }
    };
const filteredLeads = leads.filter((lead) =>

    lead.name.toLowerCase().includes(search.toLowerCase()) ||

    lead.email.toLowerCase().includes(search.toLowerCase())
);
const totalLeads = leads.length;

const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
).length;

const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
).length;
    return (

        <div>

            <h2 className="mb-4">
                All Leads
            </h2>
            <input
    type="text"
    placeholder="Search by name or email"
    className="form-control mb-3"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
<div className="row mb-4">

    <div className="col-md-4">

        <div className="card text-center shadow p-3">

            <h5>Total Leads</h5>

            <h2>{totalLeads}</h2>

        </div>

    </div>

    <div className="col-md-4">

        <div className="card text-center shadow p-3">

            <h5>Contacted</h5>

            <h2>{contactedLeads}</h2>

        </div>

    </div>

    <div className="col-md-4">

        <div className="card text-center shadow p-3">

            <h5>Converted</h5>

            <h2>{convertedLeads}</h2>

        </div>

    </div>

</div>
            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {filteredLeads.map((lead) => ( 

                        <tr key={lead.id}>

                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.source}</td>

                            <td>

                                <select
                                    className="form-select"
                                    value={lead.status}
                                    onChange={(e) =>
                                        handleStatusChange(
                                            lead.id,
                                            e.target.value
                                        )
                                    }
                                >

                                    <option value="New">
                                        New
                                    </option>

                                    <option value="Contacted">
                                        Contacted
                                    </option>

                                    <option value="Converted">
                                        Converted
                                    </option>

                                </select>

                            </td>

                            <td>

                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        handleDelete(lead.id)
                                    }
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Leads;