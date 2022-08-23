import { Checkbox, FormControlLabel } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        '&$checked': {
            color: '#000000',
        },
    },

    checked: {},
    wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        marginLeft: 0,
    },
    label: {
        fontSize: '0.8rem',
        fontFamily: `'Raleway', 'sans-serif'`,
    },
});

const CheckboxProton = (city, changeChecked) => {
    const classes = useStyles()
    const { checked, label, id } = city;
    return (
        <div>
            <FormControlLabel

                classes={{
                    label: classes.label,
                    root: classes.wrap
                }}
                control={
                    <Checkbox classes={{
                        checked: classes.checked,
                        root: classes.root
                    }}

                        size="small"
                        checked={checked}
                        onChange={() => changeChecked(id)}
                        inputProps={{ 'aria-label': 'checkbox with small size' }}
                    />
                }
                label={label}

            />

        </div>
    )
}

export default CheckboxProton;