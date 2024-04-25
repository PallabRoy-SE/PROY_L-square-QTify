import { Box, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useState } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import style from './Section.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function Section({ title = 'Title', items = [] }) {
    const theme = useTheme();
    const [collapse, setCollapse] = useState(true);
    return (
        <Box component='section' sx={{ paddingInline: '2%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '1rem' }}>
                <Typography component='span' sx={{ fontSize: '1rem', fontWeight: 600 }}>
                    {title}
                </Typography>
                <Button
                    variant='dark'
                    sx={{ fontSize: '1rem', fontWeight: 600 }}
                    onClick={() => setCollapse(!collapse)}
                >
                    {collapse ? 'Show all' : 'Collapse'}
                </Button>
            </Box>
            <Grid container rowSpacing={3}>
                {collapse ? (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={5}
                        slidesPerView={7}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {items.map((item) => (
                            <SwiperSlide>
                                <Card title={item.title} image={item.image} follows={item.follows} />
                            </SwiperSlide>
                        ))}
                        <div
                            className={`swiper-button-prev ${style.swpBtn}`}
                            style={{ backgroundColor: theme.palette.primary.main }}
                        ></div>
                        <div
                            className={`swiper-button-next ${style.swpBtn}`}
                            style={{ backgroundColor: theme.palette.primary.main }}
                        ></div>
                    </Swiper>
                ) : (
                    items.map((item) => (
                        <Grid xs={6} sm={4} md={2.4} lg={1.7}>
                            <Card title={item.title} image={item.image} follows={item.follows} />
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
}

export default Section;
