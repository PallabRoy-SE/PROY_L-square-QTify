import { Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FaqItem from '../FaqItem/FaqItem';

function Faq() {
    const [faqs, setFaqs] = useState([]);
    const fetchFaqs = async () => {
        const {
            data: { data },
        } = await axios.get(`https://qtify-backend-labs.crio.do/faq`);
        setFaqs((prev) => [...prev, ...data.splice(0, 3)]);
    };

    useEffect(() => {
        fetchFaqs();
    }, []);
    return (
        <Container maxWidth='lg' sx={{ marginTop: '1rem' }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 600, marginBottom: '2rem' }} variant='h4'>
                FAQs
            </Typography>
            {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
        </Container>
    );
}

export default Faq;
