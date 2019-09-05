import React from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
        width: '20%',
        height:  '25%',
        display: 'inline-block',
        position: 'relative',
        color: 'white',
    },
}

function DraggableBox(props) {
    const { classes, name, background} = props;
    return (
        <div className={classes.root} style={{backgroundColor : background}}>
            <span>{name}</span>
        </div>
    )
}

export default withStyles(styles)(DraggableBox) ;