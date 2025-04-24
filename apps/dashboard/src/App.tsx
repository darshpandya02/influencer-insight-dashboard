import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery, useMutation } from '@apollo/client';
import { GET_INFLUENCERS } from 'gql/src/queries';
import { Box, TextField, Button, Typography, CircularProgress, Container } from '@mui/material';
import { SetStateAction, useState } from 'react';
import * as queries from 'gql/src/queries';

console.log(queries);

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'followers', headerName: 'Followers', width: 130 },
];

function App() {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useQuery(GET_INFLUENCERS);
  // const { data: insightsData, loading: insightsLoading, error: insightsError } = useQuery(GET_INSIGHTS, {
  //   variables: { query },
  //   skip: !query, // Skip if no query is entered
  // });

  const handleQueryChange = (e: { target: { value: SetStateAction<string>; }; }) => setQuery(e.target.value);

  const handleSubmitQuery = () => {
    // Perform additional actions after query submission, e.g., submitting to backend, showing insights, etc.
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Influencer Dashboard
        </Typography>
      </Box>

      {/* Input query section */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Ask a Question to the LLM:
        </Typography>
        <TextField
          fullWidth
          label="Enter your query"
          variant="outlined"
          value={query}
          onChange={handleQueryChange}
          sx={{ mb: 2 }}
        />
        {/* <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitQuery}
          disabled={!query || insightsLoading}
        > */}
          {/* Get Insights
        </Button> */}
      </Box>

      {/* Insights section
      {insightsData && !insightsLoading && (
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
            Insights for Query: "{query}"
          </Typography>
          <Typography variant="body1">
            {insightsData.queryRAGEngine}
          </Typography>
        </Box>
      )} */}

      {/* DataGrid Section */}
      <Box sx={{ height: 400, width: '100%', my: 4 }}>
        <DataGrid rows={data.influencers} columns={columns} />
      </Box>
    </Container>
  );
}

export default App;
