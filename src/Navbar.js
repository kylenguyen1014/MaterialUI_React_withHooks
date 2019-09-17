import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

function Navbar(props) {
    const { classes, level, mode, isFullPalette } = props;
    const [openMessage, setOpenMessage] = useState(false);

    const handleChangeLevel = (value) => {
        props.changeLevel(value);
    }

    const handleChangeType = (e) => {
        props.changeType(e.target.value);
        openInfo();
    }

    const openInfo = () =>{
        setOpenMessage(true);
    }
    const closeInfo = () =>{
        setOpenMessage(false);
    }

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <span><Link to='/'>ColorPicker</Link></span>
            </div>
            {isFullPalette &&
                <div className={classes.sliderContainer}>
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider onChange={handleChangeLevel} value={level} min={100} max={900} step={100} 
                            handleStyle={{marginTop: '-3px'}}
                            trackStyle={{height: '10px', backgroundColor: 'transparent'}}
                            railStyle={{height: '8px'}}
                        />
                    </div>
                </div>
            }
            <div  className={classes.select}>
                <FormControl>
                    <Select value={mode} onChange={handleChangeType}>
                        <MenuItem value={'hex'}>Hex: #FFFFFF</MenuItem>
                        <MenuItem value={'rgb'}>Rgb: Rgb (255, 255, 255)</MenuItem>
                        <MenuItem value={'rgba'}>Rgba: Rgba (255, 255, 255, 1)</MenuItem>
                    </Select>
                </FormControl>
            </div>
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

export default withStyles(styles)(Navbar);
