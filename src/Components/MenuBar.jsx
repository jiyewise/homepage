import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { isMobile } from 'react-device-detect';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

export const MenuBar = (props) => {
    // const PCMenu = () => {
    //     return(
    //         <div className="MenuBar">
    //             <Button>Something1</Button>
    //             <Button>Something1</Button>
    //             <Button>Something1</Button>
    //         </div>
    //     )
        
    // }

    // const MobileMenu = () => {
    //     return(
    //         <div className="MenuBar">
                
    //         </div>
    //     )
    // }
    return (
        <div className="MenuBar">
        {/* {isMobile ?
            // code that will run on phones and tablets
            MobileMenu()
            :
            // code that will run on PCs
            PCMenu()
        } */}
        <List style={
            {
                backgroundColor: "#ef919c",
                flexDirection: "row-reverse",
                paddingLeft: "30px"
                // height: "40px"
            }
        }>
            <Button>Home</Button>
            <Button>Projects</Button>
            <Button>Personal</Button>
            <Button>CV</Button>
        </List>
        </div>
        // <div className="Menu">
        //     <Menu autoWidth={false} width="100%" listStyle={{width: '0.01%'}} style={{width:'100%'}}>
        //         <MenuItem primaryText="Maps"  style={styleq}/>
        //         <MenuItem primaryText="Books"  style={styleq}/>
        //         <MenuItem primaryText="Flights" style={styleq} />
        //         <MenuItem primaryText="Apps" style={styleq} />
        //     </Menu>
        // </div>
    )
}