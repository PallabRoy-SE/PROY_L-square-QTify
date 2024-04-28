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
function Section({ title = 'Title', items = [], type = 'album', tabs: Tabs }) {
    const theme = useTheme();
    const [collapse, setCollapse] = useState(true);
    return (
        <Box component='section' sx={{ paddingInline: '2%', paddingBottom: '1.5rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '1rem' }}>
                <Typography component='span' sx={{ fontSize: '1rem', fontWeight: 600 }}>
                    {title}
                </Typography>
                {type === 'song' ? (
                    <span></span>
                ) : (
                    <Button
                        variant='dark'
                        sx={{ fontSize: '1rem', fontWeight: 600 }}
                        onClick={() => setCollapse(!collapse)}
                    >
                        {collapse ? 'Show all' : 'Collapse'}
                    </Button>
                )}
            </Box>
            {Tabs ? <Tabs /> : null}
            {collapse ? (
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                        },
                        550: {
                            slidesPerView: 3,
                        },
                        700: {
                            slidesPerView: 4,
                        },
                        868: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                        1220: {
                            slidesPerView: 7,
                        },
                    }}
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card
                                title={item.title}
                                image={item.image}
                                chipText={type === 'song' ? `${item.likes} Likes` : `${item.follows} Follows`}
                            />
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
                <Grid container rowSpacing={3}>
                    {items.map((item) => (
                        <Grid key={item.id} xs={6} sm={4} md={2.4} lg={1.7}>
                            <Card
                                title={item.title}
                                image={item.image}
                                follows={item.follows}
                                chipText={type === 'song' ? `${item.likes} Likes` : `${item.follows} Follows`}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}

export default Section;
