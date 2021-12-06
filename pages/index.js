import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import CartSideBar from "../components/CartSideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchTopBar from "../components/SearchTopBar";
import styles from "../styles/Home.module.css";
import delivery from "../public/Images/delivery.png";
import imageOne from "../public/Images/1.JPG";
import imageTwo from "../public/Images/2.JPG";
import imageThree from "../public/Images/3.JPG";
import pageBanner from "../public/Images/inpagebanner.jpg";
import logo from "../public/Images/logo.png";
import data from "../dummydata/data";
import ProductCard from "../components/ProductCard";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <NativeClothingSection />
        <h1 className={styles.sectionTitle}>Our top picks for you</h1>
        <ProductSectionOne />
        <InPageBanner />
        <ProductSectionTwo />
        <Image src={delivery} alt="delivery" />
      </main>
    </div>
  );
}

const ProductSectionOne = () => (
  <div className={styles.productSection}>
    {data.slice(11, 15).map((product) => (
      <ProductCard
        img={product.img}
        name={product.name}
        price={product.price}
        key={product.id}
        id={product.id}
      />
    ))}
  </div>
);
const ProductSectionTwo = () => (
  <div className={styles.productSection}>
    {data.slice(16, 20).map((product) => (
      <ProductCard
        img={product.img}
        name={product.name}
        price={product.price}
        key={product.id}
        id={product.id}
      />
    ))}
  </div>
);
const NativeClothingSection = () => (
  <section className={styles.nativeClothingSection}>
    <h1 className={styles.sectionTitle}>Native Clothing</h1>
    <p className={styles.subtitle}>
      Enjoy 10% off on all our products. Pay less and buy more today.
    </p>
    <div className={styles.cards}>
      <div className={styles.card}>
        <Image src={imageOne} alt="imageone" width={350} height={550} />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.card}>
        <Image src={imageTwo} alt="imageTwo" width={350} height={550} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.card}>
        <Image src={imageThree} alt="imageThree" width={350} height={550} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  </section>
);
const InPageBanner = () => (
  <div className={styles.inpagebanner}>
    <Image src={pageBanner} alt="pagebanner" />
    <div className={styles.Logo}>
      <Image src={logo} alt="logo" width={300} height={400} />
    </div>
  </div>
);
