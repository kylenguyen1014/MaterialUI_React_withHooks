import React, {useState} from 'react';
import Navbar from './Navbar';
import seedColors from './seedColors';
import { withStyles } from '@material-ui/styles';
import Colorbox from './Colorbox';
import Footer from './Footer';
import colorHelper from './colorHelper';

const styles = {
    root: {
        // height: '90vh',
        width: '100%',
        overflow: 'hidden',
    },
    container: {
        height: '90vh',
        width: '100%',
    }
}

function Palette(props) {
    const [level, setLevel] = useState(400);
    const [type, setType] = useState('hex');
    const palette = colorHelper(seedColors[4]);

    const { classes } = props;

    const changeLevel = (level) => {
        setLevel(level);
    }

    const changeType = (type) => {
        setType(type);
    }

    const colorBoxes = palette.colors[level].map(color => {
        return <Colorbox key={color.name} background={color[type]} name={color.name} />
    })
    return (
        <div className={classes.root} >
            <Navbar changeLevel={changeLevel} level={level} changeType={changeType} type={type}/>
            <div className={classes.container}>
                {colorBoxes}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
        </div>
    )
}

export default withStyles(styles)(Palette);