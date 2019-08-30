import React from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
    footer: {
        height: '4vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& span': {
            marginRight: '1rem',
            fontWeight: '700'
        }
    },
    
}
function Footer(props) {
    const { classes, paletteName, emoji } = props;
    return (
        <div className={classes.footer}>
            <span>{paletteName}</span>
            <span>{emoji}</span>
        </div>
    )
}

export default withStyles(styles)(Footer);
