import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import "./Intro.css"
import { Divider } from '@material-ui/core';

export const Intro = (props) => {
    return (
    <Grid className="Title"
        container spacing={2}>
        <Grid item>
            <img
            style ={
                {
                    width: "150px",
                    height: "150px",
                    borderWidth: "2px",
                    borderRadius: "75px",
                    alignContent: "flex-start"
                }
            }
            src="https://avatars.githubusercontent.com/u/67668461?s=400&u=99a013eff976ed3450bb204c762f8fe459c5fb1c&v=4"
            />
        </Grid>
        <Divider/>
        <Grid item style={
                {
                    paddingLeft: "20px"
                }
            }>
            <Grid item >
                <h1>Jiye Lee</h1>
            </Grid>
                <h2>Explanation long long long long long long</h2>
        </Grid>
    </Grid>
    )
}