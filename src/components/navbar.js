import React from 'react'
import { AppBar, Toolbar, Button, Container, makeStyles } from "@material-ui/core"

const containerStyle = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `center`
      },
    buttonStyle: {
        color:'#FFF',   
        fontSize: 20,
        //fontFamily: ['Menlo'],
        fontWeight: 450,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 15,
        paddingRight: 15,
        '&:hover': {
            backgroundColor: '#002552'
        },
    }
});

export const navBar = () => {
    const NavbarStyle = {
        background:'#0055BB'

    }
    const classes = containerStyle();
    return (
    
        <AppBar position="static" style={NavbarStyle}>
            <Container  maxWidth="lg">
                <Toolbar className={classes.navbarDisplayFlex}>
                    <Button href="/homePage" className={classes.buttonStyle}>
                        Home
                    </Button>
                    <Button href="/userManagement" className={classes.buttonStyle}>
                        About Us
                    </Button>
                    <Button href="/addCart" className={classes.buttonStyle}>
                        Contact Us
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    
    )
}