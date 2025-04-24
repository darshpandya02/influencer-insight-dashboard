import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';
import { GET_INFLUENCERS } from 'gql/queries';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'followers', headerName: 'Followers', width: 130 },
];

function App() {
  const { data, loading, error } = useQuery(GET_INFLUENCERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Influencer Dashboard</h1>
      <DataGrid rows={data.influencers} columns={columns} />
    </div>
  );
}

export default App;

