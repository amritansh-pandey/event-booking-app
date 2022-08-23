import { makeStyles } from '@mui/styles';

import { Slider } from "@mui/material";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    thumb: {
        color: '#000000',
    },
    rail: {
        color: `rgba(0, 0, 0, 0.26)`,
    },
    track: {
        color: '#000000',
    }
});


const SliderProton = ({ value, changePrice }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={changePrice}
                valueLabelDisplay="auto"
                min={499}
                max={5000}
                classes={{
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track,
                }}
            />
        </div>
    );
};

export default SliderProton;