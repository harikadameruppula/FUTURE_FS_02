import AddLead from "./pages/AddLead";
import Leads from "./pages/Leads";

function App() {

    return (

        <div className="container mt-5">

            <h1 className="text-center mb-4">
                Mini CRM Dashboard
            </h1>

            <div className="card shadow p-4 mb-5">

                <AddLead />

            </div>

            <div className="card shadow p-4">

                <Leads />

            </div>

        </div>
    );
}

export default App;