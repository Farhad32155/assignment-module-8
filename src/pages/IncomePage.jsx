
import React from 'react';
import Income from '../components/Income';
import { Container } from '@mui/material';

const IncomePage = () => {
    return (
        <div>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20vh' }}>
                <Income />
            </Container>
        </div>
    );
};

export default IncomePage;