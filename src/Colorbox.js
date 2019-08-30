import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block'
    }
}
function Colorbox(props) {
    const { classes, background, name } = props;
    return (
        <div className={classes.root} style={{backgroundColor: `${background}`}}>
            {name}
        </div>
    )
}

export default withStyles(styles)(Colorbox);