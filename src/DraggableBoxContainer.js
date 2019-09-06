import React from 'react';
import { withStyles } from '@material-ui/styles';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import DraggableBox from './DraggableBox';

const styles = {
    root: {
        width: '100%',
        height: '100%',
    }
}
const DraggableBoxContainer = SortableContainer(({colors, deleteColor, classes}) => {
    return (
        <div className={classes.root}>
             {colors.map((color,index) => <DraggableBox key={color.name} index={index} name={color.name} background={color.color} deleteColor={deleteColor}/>)}
        </div>
    )
})

export default withStyles(styles)(DraggableBoxContainer) ;