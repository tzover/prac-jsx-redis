import React, { useState } from 'react';
import { RegisterBtn } from '../atoms/RegisterBtn';
import { TextInputBox } from '../atoms/TextInputBox';
import { makeStyles } from '@material-ui/core/styles';

export const ShorTextForm = () => {
    const classes = useStyles();

    const [ShortText, setShortText] = useState('');
    const [RegisterShortText, setRegisterShortText] = useState('');

    const onChangeShortText = (event) => setShortText(event.target.value);

    const onClickRegisterShortText = () => {
        if (ShortText === '') {
            alert('none');
            return;
        }
        const newShortTextValue = ShortText;
        setRegisterShortText(newShortTextValue);
        alert(`valueは${RegisterShortText}です`);
        setShortText('');
    };

    return (
        <div className={classes.shortForm}>
            <TextInputBox ShortText={ShortText} onChange={onChangeShortText} />
            <RegisterBtn onClick={onClickRegisterShortText} />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    shortForm: {
        display: 'flex',
        justifyContent: 'center',
        background: '#85C5F3',
        padding: '20px',
    },
}));
