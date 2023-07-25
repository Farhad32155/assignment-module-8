import React from 'react';
import { Button, TextField } from '@mui/material';

const Income = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="Income" variant="outlined" />
            <Button variant="contained">Add Imcome</Button>
        </div>
    );
};

export default Income;