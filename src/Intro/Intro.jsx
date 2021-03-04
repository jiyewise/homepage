import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import "./Intro.css"
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
    ].join(','),
  },});

export const Intro = (props) => {

    const renderTitle = () => {
        return (
        <Grid className="Title"
            container spacing={2}>
            <Grid item>
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
                <Grid item className="Name">
                    <Grid item >
                        {/* <h1>Jiye Lee</h1> */}
                        <Typography variant="h4">Jiye Lee</Typography>
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
                                fontSize: "16px",
                                fontStyle: "italic"
                            }
                        }>Steady Enthusiast. Researcher in Training.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const renderAbout = () => {
        return (
            <Grid container className="About">
                <Grid item style={
                    {
                        direction: "row"
                    }
                }>
                    <Typography variant="h5">About</Typography>
                </Grid>
                <Grid item>
                <Divider style={
                            {
                                marginTop:"8px",
                                marginBottom:"5px"
                            }
                        }></Divider>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Grid>
            </Grid>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="IntroContainer">
            {renderTitle()}
            <br></br>
            <br></br>
            {renderAbout()}
            </div>
    </ThemeProvider>
    )
}