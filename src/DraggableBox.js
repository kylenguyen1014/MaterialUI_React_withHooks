import React from 'react';
import { SortableElement} from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import down from './ResponsiveHelper';

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
        },
        [down('lg')]:{
            width: '25%',
            height: '20%',
        },
        [down('md')]:{
            width: '50%',
            height: '10%',
        },
        [down('sm')]:{
            width: '100%',
            height: '5%',
        },
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

const DraggableBox = SortableElement((props) => {
    const { classes, name, background} = props;
    return (
        <div className={classes.root} style={{backgroundColor : background}}>
            <span>{name}</span>
            <IconButton className={classes.delete} onClick={() => props.deleteColor(name)}>
                <DeleteIcon/>
            </IconButton>
        </div>
    )
})

export default withStyles(styles)(DraggableBox) ;