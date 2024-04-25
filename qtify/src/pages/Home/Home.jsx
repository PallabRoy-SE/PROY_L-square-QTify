import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Section from '../../components/Section/Section';
import axios from 'axios';

function Home() {
    const [topAlbums, setTopAlbums] = useState([]);

    const fetchTopAlbums = async () => {
        try {
            const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
            if (res.data?.length) {
                setTopAlbums(() => [...res.data]);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchTopAlbums();
    }, []);
    return (
        <main>
            <HeroSection />
            <section>
                <Section title='Top Albums' items={topAlbums} />
            </section>
        </main>
    );
}

export default Home;
