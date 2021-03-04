import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import "./Intro.css"
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SchoolIcon from '@material-ui/icons/School';

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
            <Grid container direction="column" className="About">
                <Grid item >
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

    const renderEdu = () => {
        return (
            <Grid container direction="column" >
                <Grid item>
                    <Typography variant="h5">Education</Typography>
                </Grid>
                <Grid item>
                <Divider style={
                            {
                                marginTop:"8px",
                                marginBottom:"5px"
                            }
                        }></Divider>
                    <List dense="false">
                        <ListItem>
                            <Grid container direction="row"  style={
                                {
                                    paddingLeft: "0px"
                                } 
                            } >
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item xs="12" md="3" style={
                                    {
                                        paddingBottom: "10px"
                                    }
                                }>
                                    <Typography>Mar 2017 - Aug 2021  (Expected)</Typography>
                                </Grid>
                                <Grid item>
                                <Typography>College of Liberal Studies, Seoul National University</Typography>
                                <Typography style={
                                    {
                                        fontSize: "15px",
                                        fontStyle: "italic",
                                        paddingTop: "5px"
                                    }
                                }>B.S. in Chemistry & B.S in Computer Science and Engineering</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <br></br>
                        <ListItem>
                            <Grid container direction="row">
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item xs="12" md="3" style={
                                    {
                                        paddingBottom: "10px"
                                    }
                                }>
                                    <Typography >Mar 2014 - Feb 2017</Typography>
                                </Grid>
                                <Grid item>
                                <Typography>Daewon Foreign Language High School</Typography>
                                <Typography style={
                                    {
                                        fontSize: "15px",
                                        fontStyle: "italic",
                                        paddingTop: "5px"
                                    }
                                }>Department of Chinese Language</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        )
    }

    const renderResExp = () => {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h5">Research Experiences</Typography>
                </Grid>
                <Grid item>
                <Divider style={
                            {
                                marginTop:"8px",
                                marginBottom:"5px"
                            }
                        }></Divider>
                    <Typography style={
                        {
                            fontWeight: "500",
                            marginTop: "10px"
                        }
                    }>Undergraduate Research Intern
                    </Typography>
                    <List dense="false">
                        <ListItem>
                            <Grid container direction="row"
                            >
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item item xs="12" md="3" style={
                                    {
                                        paddingBottom: "10px"
                                    }
                                }>
                                    <Typography>Jul 2020 - present</Typography>
                                </Grid>
                                <Grid item >
                                <Typography>Movement Research Lab.</Typography>
                                <Typography style={
                                    {
                                        fontSize: "15px",
                                        // fontStyle: "italic",
                                        // paddingTop: "5px"
                                    }
                                }>Department of Computer Science and Enginneering, Seoul National University</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <br></br>
                        <ListItem>
                            <Grid container direction="row">
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item  xs="12" md="3" style={
                                    {
                                        paddingBottom: "10px"
                                    }
                                }>
                                    <Typography>Dec 2018 - Jun 2020</Typography>
                                </Grid>
                                <Grid item>
                                <Typography>NMR Laboratory of Protein Aggregation and Recognition</Typography>
                                <Typography style={
                                    {
                                        fontSize: "15px",
                                        // fontStyle: "italic",
                                        // paddingTop: "5px"
                                    }
                                }>Department of Chemistry, Seoul National University</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        )
    }

    // TODO
    // Research Interests
    // Awards
    // Skills
    // Contact
    
    return (
        <ThemeProvider theme={theme}>
            <div className="IntroContainer">
            {renderTitle()}
            <br></br>
            <br></br>
            {renderAbout()}
            <br></br>
            <br></br>
            {renderEdu()}
            <br></br>
            <br></br>
            {renderResExp()}
            </div>
    </ThemeProvider>
    )
}