import { useState } from "react";
import API from "../services/api";

function AddLead() {

    const [lead, setLead] = useState({
        name: "",
        email: "",
        source: ""
    });

    const handleChange = (e) => {

        setLead({
            ...lead,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/leads", lead);

            alert(response.data.message);

            setLead({
                name: "",
                email: "",
                source: ""
            });

            window.location.reload();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div>

            <h2 className="mb-4">
                Add Lead
            </h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        className="form-control"
                        value={lead.name}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="form-control"
                        value={lead.email}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <input
                        type="text"
                        name="source"
                        placeholder="Lead Source"
                        className="form-control"
                        value={lead.source}
                        onChange={handleChange}
                    />

                </div>

                <button className="btn btn-primary">

                    Add Lead

                </button>

            </form>

        </div>
    );
}

export default AddLead;