import React from 'react'
import { makeStyles } from "@material-ui/core"
/*.footer
{
    text-align:center;
    position:aboslute;
    bottom:0;
    width:100%;
}*/

const containerStyle = makeStyles({
    footerStyle: {
        justifyContent: `center`,
        //display: `flex`,
        position: `absolute`,
        bottom: 0,
        width: `100%`,
        background:'#0055BB',
        color: `#FFF`
    },
});
export const footer = () => {
    const classes = containerStyle();
    return (
        <div className={classes.footerStyle}>
            <h5>Copyright &copy; 2021 Kevin George. All Rights Reserved</h5>
        </div>
    )
}