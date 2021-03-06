import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import "./Intro.css"
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import CropOutlinedIcon from '@material-ui/icons/CropOutlined';
import Paper from '@material-ui/core/Paper';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import { AiOutlineGithub, AiOutlineMail  } from "react-icons/ai";

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
                        {/* <Divider style={
                            {
                                marginTop:"8px",
                                marginBottom:"5px"
                            }
                        }></Divider> */}
                        <Typography variant="h6" style={
                            {
                                fontWeight: "400",
                                fontSize: "16px",
                                fontStyle: "italic",
                                marginTop: "5px",
                                color: "#5a5a5a"
                            }
                        }>Steady Enthusiast. Researcher in Training.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const renderAbout = () => {
        return (
            <Grid container direction="column" className="About" style={
                {
                    marginBottom: "5px"
                }
            }>
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
                    <Typography style={
                        {
                            fontSize: "15px",
                            // textAlign: "justify"
                        }
                    }>Hi there, I am a final year undergrad at Seoul National University, majoring in <strong style={{fontWeight: "500"}}>Chemistry</strong> and <strong style={{fontWeight: "500"}}>Computer Science & Engineering</strong>.
                        Currently I am working as a research intern in <strong style={{fontWeight: "500"}}>SNU Movement Research Lab</strong> advised by <strong style={{fontWeight: "500"}}>Jehee Lee</strong>, focusing on <strong style={{fontWeight: "500"}}>computer simulations of human and animal movements</strong>. 
                        <br></br>
                        <br></br>
                        I am now exploring various topics which include, but are not limited to <strong style={{fontWeight: "500"}}>physics-based simulations</strong>, <strong style={{fontWeight: "500"}}>robotics</strong>, <strong style={{fontWeight: "500"}}>reinforcement learning</strong> and <strong style={{fontWeight: "500"}}>biomechanics</strong>.
                        Previously, I have been interested in <strong style={{fontWeight: "500"}}>biophysics</strong>, exploring diverse <strong style={{fontWeight: "500"}}> physico-chemical approaches for protein dynamics</strong>. <br></br><br></br>Find out more about my projects <u>here</u> or download my <u>CV</u>. <small>(will be updated soon!)</small>
                        <br></br>
                        <br></br>
                        Outside of research, I have a great passion for <strong style={{fontWeight: "500"}}>digital art, hand-drawing, live rock concerts,</strong> and <strong style={{fontWeight: "500"}}>Sci-Fi</strong>. Click <u>here</u> to check out my personal work. <small>(will be updated soon!)</small>
                    </Typography>
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
                        <ListItem className="listitem">
                            <Grid container direction="row"  style={
                                {
                                    paddingLeft: "0px"
                                } 
                            } >
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item xs="12" md="3">
                                    <Typography style={
                                    {
                                        paddingBottom: "5px",
                                        fontSize: "15px",
                                        fontWeight: "500",
                                        color: "#5a5a5a"
                                    }
                                }>Mar 2017 - Aug 2021  (Expected)</Typography>
                                </Grid>
                                <Grid item>
                                <Typography style={
                                    {
                                        fontWeight: "500"
                                    }
                                }>College of Liberal Studies, Seoul National University</Typography>
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
                        <ListItem className="listitem">
                            <Grid container direction="row">
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item xs="12" md="3">
                                    <Typography style={
                                    {
                                        paddingBottom: "5px",
                                        fontSize: "15px",
                                        fontWeight: "500",
                                        color: "#5a5a5a"
                                    }
                                } >Mar 2014 - Feb 2017</Typography>
                                </Grid>
                                <Grid item>
                                <Typography style={
                                    {
                                        fontWeight: "500"
                                    }
                                }>Daewon Foreign Language High School</Typography>
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

    const renderExp = () => {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h5">Experience</Typography>
                </Grid>
                <Grid item>
                <Divider style={
                            {
                                marginTop:"8px",
                                marginBottom:"5px"
                            }
                        }></Divider>
                    <Typography className="subtitle" style={
                        {
                            fontWeight: "500",
                            marginTop: "10px",
                        }
                    }> Research Experience
                    </Typography>
                        <ListItem className="res_item" style={
                            {
                                // marginBottom: "10px"
                            }
                        }>
                            <Grid container direction="row" style={
                                {
                                    marginBottom: "0px",
                                    paddingBottom: "0px"
                                }
                            }
                            >
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item xs="12" md="3" >
                                    <Typography style={
                                        {
                                            paddingBottom: "5px",
                                            fontSize: "15px",
                                            fontWeight: "500",
                                            color: "#5a5a5a"
                                        }
                                    }>Jul 2020 - present</Typography>
                                </Grid>
                                <Grid item >
                                        <Grid container direction="row">
                                            <Typography style={
                                                {
                                                    fontWeight: "500",
                                                    paddingRight: "4px"
                                                }
                                            }>Movement Research Lab</Typography>
                                            <Typography style={
                                                {
                                                    fontSize: "13px",
                                                    paddingTop: "3px"
                                                }
                                            }>| Department of Computer Science and Engineering, Seoul National University</Typography>
                                        </Grid>
                                        <Typography style={
                                            {
                                                paddingTop: "5px",
                                                fontSize: "15px",
                                                fontWeight: "400"
                                            }
                                        }>Undergraduate Research Intern </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem className="listitem" style={
                            {
                                paddingBottom: "0px",
                                marginBottom: "0px"
                            }
                        }>
                            <Grid container direction="row">
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item  xs="12" md="3" >
                                    <Typography style={
                                        {
                                            paddingBottom: "5px",
                                            fontSize: "15px",
                                            fontWeight: "500",
                                            color: "#5a5a5a"
                                        }
                                    }>Dec 2018 - Jun 2020</Typography>
                                </Grid>
                                <Grid item>
                                {/* <Typography>NMR Laboratory of Protein Aggregation and Recognition</Typography>
                                <Typography style={
                                    {
                                        fontSize: "15px",
                                        // fontStyle: "italic",
                                        paddingTop: "5px"
                                    }
                                }>Department of Chemistry, Seoul National University</Typography> */}
                                    <Grid container direction="row">
                                            <Typography style={
                                                {
                                                    fontWeight: "500",
                                                    paddingRight: "4px"
                                                }
                                            }>NMR Laboratory of Protein Aggregation and Recognition</Typography>
                                            <Typography style={
                                                {
                                                    fontSize: "13px",
                                                    paddingTop: "3px"
                                                }
                                            }>| Department of Chemistry, Seoul National University</Typography>
                                        </Grid>
                                        <Typography style={
                                            {
                                                paddingTop: "5px",
                                                fontSize: "15px",
                                                fontWeight: "400",
                                            }
                                        }>Undergraduate Research Intern</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                </Grid>
                <Grid item>
                    <Typography className="subtitle_work" style={
                        {
                            fontWeight: "500",
                        }
                    }>Teaching Experience 
                    </Typography>
                        <ListItem className="listitem" style={
                            {
                                paddingBottom: "0px"
                            }
                        }>
                            <Grid container direction="row"
                            >
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item xs="12" md="3">
                                    <Typography style={
                                    {
                                        paddingBottom: "5px",
                                        fontSize: "15px",
                                        fontWeight: "500",
                                        color: "#5a5a5a"
                                    }
                                }>Mar 2021 - Jun 2021</Typography>
                                </Grid>
                                <Grid item >
                                <Typography style={
                                    {
                                        fontWeight: "500"
                                    }
                                }>Undergraduate Teaching Assistant</Typography>
                                <Typography style={
                                    {
                                        fontSize: "15px",
                                        // fontStyle: "italic",
                                        paddingTop: "4px"
                                    }
                                }>Data Structures Course (21' Spring)</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                </Grid>
                <Grid item>
                    <Typography style={
                        {
                            fontWeight: "500",
                            marginTop: "10px"
                        }
                    } className="subtitle_vol">Volunteer Services
                    </Typography>
                        <ListItem className="listitem" style={
                            {
                                paddingBottom: "0px"
                            }
                        }>
                            <Grid container direction="row"
                            >
                                {/* <Grid item>
                                    <SchoolIcon/>
                                </Grid> */}
                                <Grid item xs="12" md="3">
                                    <Typography style={
                                    {
                                        paddingBottom: "5px",
                                        fontSize: "15px",
                                        fontWeight: "500",
                                        color: "#5a5a5a"
                                    }
                                }>Jun 2019 - Jul 2019 </Typography>
                                </Grid>
                                <Grid item >
                                <Typography style={
                                    {
                                        fontWeight: "500"
                                    }
                                }>Research Assistant</Typography>
                                <Typography style={
                                    {
                                        fontSize: "15px",
                                        // fontStyle: "italic",
                                        paddingTop: "4px"
                                    }
                                }>Scientists and Engineers Without Borders, Seoul, South Korea</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                </Grid>
            </Grid>
        )
    }

    // TODO
    
    // Research Interests
    // Awards
    const renderAwards = () => {
        return (
            <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">Awards & Honors</Typography>
            </Grid>
                <Grid item>
                    <Divider style={
                        {
                            marginTop:"8px",
                            marginBottom:"5px"
                        }
                    }></Divider>
                </Grid>
                <List>
                <ListItem className="listitem">
                    <Grid item>
                        <Typography style={
                            {
                                fontWeight: "500"
                            }
                        }>SNU Undergraduate Research Award</Typography>
                        <Typography style={
                            {
                                fontSize: "15px",
                                paddingTop: "5px"

                            }
                        }>3<sup>rd</sup> place award (Presidental Award), Seoul National University</Typography>
                    </Grid>
                                
                </ListItem>
                <ListItem className="listitem">
                    <Grid item>
                        <Typography style={
                            {
                                fontWeight: "500"
                            }
                        }>Outstanding Undergraduate Research in Chemistry</Typography>
                        <Typography style={
                            {
                                fontSize: "15px",
                                paddingTop: "5px"

                            }
                        }>2<sup>nd</sup> place award, Department of Chemistry in Seoul National University</Typography>
                    </Grid>
                </ListItem>
                <ListItem className="listitem">
                    <Grid item>
                        <Typography style={
                            {
                                fontWeight: "500"
                            }
                        }>SNU Undergraduate Research Grant</Typography>
                        <Typography style={
                            {
                                fontSize: "15px",
                                paddingTop: "5px"

                            }
                        }>Granted by Faculty of Liberal Education, Seoul National University</Typography>
                    </Grid>           
                </ListItem>
                </List>
                </Grid>
        )
    }
    // Skills
    const renderSkills = () => {
        return (
            <Grid container direction="column" style={
                {
                    marginBottom: "5px"
                }
            }>
            <Grid item>
                <Typography variant="h5">Skills</Typography>
            </Grid>
                <Grid item>
                    <Divider style={
                        {
                            marginTop:"8px",
                            marginBottom:"5px"
                        }
                    }></Divider>
                </Grid>
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >
                    <Grid item xs={12} sm={5} md={2} lg={2}>
                        <br></br>
                        <Paper style={
                            {
                                padding: theme.spacing(3),
                                textAlign: "center"
                            }
                        }>
                            <PublicOutlinedIcon style={
                                {
                                    fontSize: "50",
                                    color: "#ef919c",
                                    textAlign: "center"
                                }
                            }></PublicOutlinedIcon>
                            <Typography style={
                                {
                                    paddingBottom: "5px",
                                    fontWeight: "500"
                                }
                            }>Language</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>Korean (Native)</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"

                                }
                            }>English (Fluent)</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>Mandarin Chinese <br></br>(Conversational)</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5} md={2} lg={2}>
                        <br></br>
                        <Paper style={
                            {
                                padding: theme.spacing(3),
                                textAlign: "center"
                            }
                        }>
                            <CodeOutlinedIcon style={
                                {
                                    fontSize: "50",
                                    color: "#ef919c",
                                    textAlign: "center"
                                }
                            }></CodeOutlinedIcon>
                            <Typography style={
                                {
                                    paddingBottom: "5px",
                                    fontWeight: "500"
                                }
                            }>Programming</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>Python</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"

                                }
                            }>C++</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>JAVA</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>C</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5} md={2} lg={2}>
                        <br></br>
                        <Paper style={
                            {
                                padding: theme.spacing(3),
                                textAlign: "center"
                            }
                        }>
                            <LanguageOutlinedIcon style={
                                {
                                    fontSize: "50",
                                    color: "#ef919c",
                                    textAlign: "center"
                                }
                            }></LanguageOutlinedIcon>
                            <Typography style={
                                {
                                    paddingBottom: "5px",
                                    fontWeight: "500"
                                }
                            }>Web</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>React JS</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"

                                }
                            }>Django</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>JavaScript</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>HTML, CSS</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5} md={2} lg={2}>
                        <br></br>
                        <Paper style={
                            {
                                padding: theme.spacing(3),
                                textAlign: "center"
                            }
                        }>
                            <CropOutlinedIcon style={
                                {
                                    fontSize: "47",
                                    color: "#ef919c",
                                    textAlign: "center"
                                }
                            }></CropOutlinedIcon>
                            <Typography style={
                                {
                                    paddingBottom: "5px",
                                    paddingTop: "1px",
                                    fontWeight: "500"
                                }
                            }>Design & Adobe</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>Illurstrator</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"

                                }
                            }>Photoshop</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>Premiere Pro</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }><br/></Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5} md={2} lg={2}>
                        <br></br>
                        <Paper style={
                            {
                                padding: theme.spacing(3),
                                textAlign: "center"
                            }
                        }>
                            <LayersOutlinedIcon style={
                                {
                                    fontSize: "50",
                                    color: "#ef919c",
                                    textAlign: "center"
                                }
                            }></LayersOutlinedIcon>
                            <Typography style={
                                {
                                    paddingBottom: "5px",
                                    fontWeight: "500"
                                }
                            }>Framework</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>NumPy</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"

                                }
                            }>PyTorch</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }>OpenGL</Typography>
                            <Typography style={
                                {
                                    fontSize: "14px",
                                    paddingBottom: "1px"
                                }
                            }><br/></Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    // Contact
    const renderContact = () => {
        return (
            <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">Contact</Typography>
            </Grid>
                <Grid item>
                    <Divider style={
                        {
                            marginTop:"8px",
                            marginBottom:"5px"
                        }
                    }></Divider>
                </Grid>
                <List dense="false">
                        <ListItem>
                            <AiOutlineMail style={
                                {
                                    fontSize: "18px"
                                }
                            }></AiOutlineMail>
                            <Typography style={
                                {
                                    fontSize: "15px"
                                }
                            }>&nbsp; jiye.lee@mrl.snu.ac.kr</Typography>
                        </ListItem>
                        <ListItem>
                            <AiOutlineMail style={
                                {
                                    fontSize: "18px"
                                }
                            }></AiOutlineMail>
                            <Typography style={
                                {
                                    fontSize: "15px"
                                }
                            }>&nbsp; kay2353@snu.ac.kr</Typography>
                        </ListItem>
                        <ListItem>
                            <AiOutlineGithub style={
                                {
                                    fontSize: "18px"
                                }
                            }></AiOutlineGithub>
                            <Typography style={
                                {
                                    fontSize: "15px"
                                }
                            }>&nbsp; github.com/jiyewise</Typography>
                        </ListItem>
                </List>
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
            <br></br>
            {/* <br></br> */}
            {renderExp()}
            <br></br>
            {renderEdu()}
            <br></br>
            {renderAwards()}
            <br></br>
            {renderSkills()}
            <br></br>
            {renderContact()}
            <br></br>
            <Typography style={
                {
                    textAlign: "center",
                    paddingBottom: "10px",
                    fontWeight: "600",
                    color: "#ef919c"
                }
            }>&copy; Jiye Lee, 2021</Typography>
            </div>
    </ThemeProvider>
    )
}