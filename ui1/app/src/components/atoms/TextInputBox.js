import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const TextInputBox = ({ ShortText, onChange, disabled }) => {
    const classes = useStyles();
    return (
        <div className={classes.inputArea}>
            <TextField
                id="outlined-basic"
                type="text"
                variant="outlined"
                label="Create new todos"
                value={ShortText}
                disabled={disabled}
                onChange={onChange}
            />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    inputArea: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
}));
