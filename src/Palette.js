import React, {useState} from 'react';
import Navbar from './Navbar';
import seedColors from './seedColors';
import { withStyles } from '@material-ui/styles';
import Colorbox from './Colorbox';
import Footer from './Footer';
import colorHelper from './colorHelper';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
    const [level, setLevel] = useState(500);
    const [mode, setMode] = useState('hex');
    const [openMessage, setOpenMessage] = useState(false);
    const palette = colorHelper(seedColors[4]);

    const { classes } = props;

    const changeLevel = (level) => {
        setLevel(level);
    }

    const changeType = (type) => {
        setMode(type);
    }

    const openInfo = () =>{
        setOpenMessage(true);
    }
    const closeInfo = () =>{
        setOpenMessage(false);
    }

    const colorBoxes = palette.colors[level].map(color => {
        return <Colorbox key={color.name} background={color[mode]} name={color.name} />
    })
    return (
        <div className={classes.root} >
            <Navbar changeLevel={changeLevel} level={level} changeType={changeType} mode={mode} openInfo={openInfo}/>
            <div className={classes.container}>
                {colorBoxes}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji}/>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={openMessage}
                autoHideDuration={3000}
                onClose={closeInfo}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Format Changed</span>}
                action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={closeInfo}
                >
                    <CloseIcon />
                </IconButton>,
                ]}
            />
        </div>
    )
}

export default withStyles(styles)(Palette);