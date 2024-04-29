import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqItem({ question, answer }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='subtitle1'>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body2'>{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}
