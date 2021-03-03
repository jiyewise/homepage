import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import "./Intro.css"
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export const Intro = (props) => {
    return (
    <div className="IntroContainer">
    <Grid className="Title"
        container spacing={2}>
        <Grid item style={
            {
                paddingRight: "30px"
            }
        }
        >
            <img
            style ={
                {
                    width: "120px",
                    height: "120px",
                    borderWidth: "2px",
                    borderRadius: "75px",
                    alignContent: "flex-start"
                }
            }
            src="https://avatars.githubusercontent.com/u/67668461?s=400&u=99a013eff976ed3450bb204c762f8fe459c5fb1c&v=4"
            />
        </Grid>

            <Grid item>
                <Grid item >
                    {/* <h1>Jiye Lee</h1> */}
                    <br></br>
                    <Typography variant="h5" style={
                        {
                            fontWeight: "450"
                        }
                    }>Jiye Lee</Typography>
                </Grid>
                <Grid item >
                    {/* <h1>Jiye Lee</h1> */}
                    <Divider style={
                        {
                            marginTop:"8px",
                            marginBottom:"5px"
                        }
                    }></Divider>
                    <Typography variant="h6" style={
                        {
                            fontWeight: "400",
                            fontSize: "16px"
                        }
                    }>Steady Enthusiast. Researcher in Training.</Typography>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}