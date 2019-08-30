import React from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
    footer: {
        height: '4vh',
        display: 'flex',
        justifyContent: 'flex-end',
    }
}
function Footer(props) {
    const { classes } = props;
    return (
        <div className={classes.footer}>
            <span></span>
            <span></span>
        </div>
    )
}

export default withStyles(styles)(Footer);
