import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export default function PaginationComp() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Grid mt={3} mb={5} container sx={{ justifyContent: "center" }}>
        <Grid item xs={8} sx={{display:'flex', justifyContent:'center'}}>
          <Pagination count={5} page={page} onChange={handleChange} />
        </Grid>
      </Grid>
    </>
  );
}
