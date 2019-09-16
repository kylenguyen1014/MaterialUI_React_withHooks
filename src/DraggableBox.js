import React from 'react';
import { SortableElement} from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles/DraggableBox';

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