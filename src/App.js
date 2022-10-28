import logo from './logo.svg';
import './App.css';
import Pagination from './Pagination/Pagination';
import Table from './DataTable/DataTable';
import DataTable from './DataTable/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({props}) {
    return (
        <div className=" ">
            <h1 className="text-center py-4">Table Data</h1>
            <DataTable props={props} />
            <div className="text-center py-4">
                <Pagination props={props} />
            </div>
        </div>
    );
}

export default App;
