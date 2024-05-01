import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Tooltip } from '@mui/material';

export default function Card({ title, image, chipText, tooltipText }) {
    return (
        <Tooltip title={tooltipText} placement='top' arrow>
            <section>
                <MuiCard sx={{ width: 159, height: 205, borderRadius: '10px' }}>
                    <CardActionArea>
                        <CardMedia component='img' height='170' image={image} alt={title} />
                        <CardContent
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 35,
                                marginLeft: '0.5em',
                                padding: 0,
                                marginBottom: '0.2em',
                            }}
                        >
                            <Chip
                                sx={{
                                    height: 23,
                                    fontSize: 10,
                                    fontWeight: 400,
                                    backgroundColor: `var(--color-dark)`,
                                    '& .MuiChip-label': {
                                        paddingInline: '0.8em',
                                    },
                                }}
                                label={chipText}
                            />
                        </CardContent>
                    </CardActionArea>
                </MuiCard>
                <Typography
                    component='span'
                    sx={{
                        fontSize: 13,
                        fontWeight: 300,
                        width: 159,
                        display: 'inline-block',
                        textOverflow: 'ellipsis',
                        textWrap: 'nowrap',
                        overflow: 'hidden',
                        marginTop: '0.5em',
                    }}
                >
                    {title}
                </Typography>
            </section>
        </Tooltip>
    );
}
