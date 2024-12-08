import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound(){
    const navigate = useNavigate();
    useEffect(()=>{
       navigate("/home"); 
    },[]);

    return <Typography variant="h1" sx={{textAlign:'center'}} mt={10} mb={5}>Hello</Typography> ;
}

export default NotFound;