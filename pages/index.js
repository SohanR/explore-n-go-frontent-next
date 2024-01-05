import axios from 'axios';
import Head from 'next/head';
import BlogComponent from '../components/BlogComponent/BlogComponent';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Propertys from '../components/Propertys/Propertys';
import SpecialServices from '../components/SpecialServices/SpecialServices';
import WhyUs from '../components/WhyUs/WhyUs';
import LovelyHomeDetail from '../components/lovelyHomeDetail/LovelyHomeDetail';
import styles from '../styles/index.module.scss';
import { baseUrl } from '../utils/base';

export default function Home({ propertyList, propertyList2, homesDetails, blogss }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Rooms - Find your hostel</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/home_icon-icons.com_73532.ico" />
            </Head>

            <main className={styles.main}>
                <Navbar />
                <Header />
                <Features propertyList={propertyList} />
                <LovelyHomeDetail homesDetails={homesDetails} />
                <Propertys propertyList2={propertyList2} />
                <WhyUs />
                <SpecialServices />
                <BlogComponent blogDetail={blogss} title="Rooms Blogs" />
                <Newsletter />
                <Footer />
            </main>
        </div>
    );
}


//  The function `getStaticProps` makes multiple API requests to retrieve data related to hotels and
//  blogs, and returns the retrieved data as props.
//  returns an object with the properties `propertyList`, `propertyList2`, `homesDetails`, and
//  `blogss`. The values of these properties are the data retrieved from the API calls.

export async function getStaticProps() {
    const response = await axios.get(
        `${baseUrl}/hotels/getHotelByCity?cities=berlin,tokyo,dubai`
    );
    const response2 = await axios.get(
        `${baseUrl}/hotels/getHotelByType`
    );
    const response3 = await axios.get(
        `${baseUrl}/hotels?featured=true&limit=4`
    );
    const res = await axios.get(`${baseUrl}/blogs`);

    const data = await response.data.message;
    const data2 = await response2.data.message;
    const data3 = await response3.data.message;
    const blog = res.data.message;

    return {
        props: {
            propertyList: data,
            propertyList2: data2,
            homesDetails: data3,
            blogss: blog,
        },
    };
}