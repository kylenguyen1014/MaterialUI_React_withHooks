import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = {
    root: {
        width: '20%',
        height:  '25%',
        display: 'inline-block',
        position: 'relative',
        color: 'white',
        marginTop: '-5px',
        '& span' : {
            position: 'absolute',
            bottom: '0',
            left: '0',
        }
    },
    delete: {
        position: 'absolute',
        bottom: '5px',
        right: '5px',
        color: 'rgb(255, 255, 255, 0.8)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.4)',
        }
    }
}

function DraggableBox(props) {
    const { classes, name, background} = props;
    return (
        <div className={classes.root} style={{backgroundColor : background}}>
            <span>{name}</span>
            <IconButton className={classes.delete} onClick={() => props.deleteColor(name)}>
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}

export default withStyles(styles)(DraggableBox) ;