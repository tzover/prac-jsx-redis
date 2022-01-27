import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const RegisterBtn = ({ onClick, disabled }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.addButton}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={onClick}
                    disabled={disabled}
                >
                    <p>Add Todos</p>
                </Button>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    addButton: {
        margin: '8px 10px',
    },
}));
