import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Section from '../../components/Section/Section';
import axios from 'axios';

function Home() {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    const fetchNewAlbums = async () => {
        try {
            const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
            if (res.data?.length) {
                setNewAlbums(() => [...res.data]);
            }
        } catch (error) {
            console.log(error);
        }
    };

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
        fetchNewAlbums();
        fetchTopAlbums();
    }, []);
    return (
        <main>
            <HeroSection />
            <section>
                <Section title='Top Albums' items={topAlbums} />
                <Section title='New Albums' items={newAlbums} />
            </section>
        </main>
    );
}

export default Home;
