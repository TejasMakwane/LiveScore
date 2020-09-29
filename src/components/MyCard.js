import { Card, CardActions, CardContent, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography,DialogActions} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatcheDetails, getMatches } from "../api/Api";
import { Button } from '@material-ui/core';

const MyCard=({match})=>{

    const [detail,setdetail]=useState({});
    const [open, setopen] = useState(false);

    const handleClick=(id)=>{
        getMatcheDetails(id)
        .then((data)=>{console.log("Match Data",data)
        setdetail(data);
        handleOpen();
    })
        .catch((error)=>console.log(error))
    }

    const getMatchCart=()=>{
        return (
            <Card style={{marginTop:15}}>
                    <CardContent>
                           
                           <Grid container justify="center" alignItems="center" spacing={4}>
                                <Grid item>
                                    <Typography variant="h5">{match["team-1"]}</Typography>
                                    </Grid>
                                    <Grid item>
                                    <img style={{width:120}} src={require("../images/versus.jpg")} alt=""></img>

                                    </Grid>
                                    <Grid item>
                                    <Typography variant="h5">{match["team-2"]}</Typography>
                                    </Grid>

                           </Grid>
                    </CardContent>
                    
                    <CardActions>
                        <Grid container justify="center" >

                        <Button onClick={()=>{
                            handleClick(match.unique_id);
                        }} item variant="outlined" color="primary">Show Details</Button>

                        <Button style={{marginLeft:7}} item variant="outlined" color="secondary">Start Time: {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                        </Grid>
                    </CardActions>
                
            </Card>
        );
    };

    const handleClose=()=>{
        setopen(false)
    }

    const handleOpen=()=>{
        setopen(true)
    }

    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}> 
            <DialogTitle id="alert-dialog-title">{"Match Details..."}</DialogTitle>
            <DialogContent>
                <DialogContentText  id="alert-dialog-description">
                        <Typography>{detail.stat}</Typography>
                        <Typography>
                            Match :
                                    <span style={{fontStyle:"italic",fontWeight:"bold"}}> 
                                            {detail.matchStarted? "Started" : "Still Not Strated"} { " "}
                            
                                    </span>
                        </Typography>

                        <Typography>
                            Score :
                                    <span style={{fontStyle:"italic",fontWeight:"bold"}}> 
                                          
                                           {detail.score}
                            
                                    </span>
                        </Typography>
                </DialogContentText>


                
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>
    );


    return <Fragment>
        {getMatchCart()}
        {getDialog()}
    </Fragment>
    
    
};

export default MyCard;