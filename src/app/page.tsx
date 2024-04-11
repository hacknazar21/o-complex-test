import styles from './page.module.css'
import Header from "@/components/header";
import MainBody from "@/components/main-body";
import {getDataFromAPI} from "@/helpers";
import {Reviews, Products} from "@/types";

export default async function Home() {
    const reviews: Reviews = await getDataFromAPI('/reviews');
    const products: Products = await getDataFromAPI('/products?page=1&page_size=18');
    return (
        <main className={styles.main}>
            <Header/>
            <MainBody products={products} reviews={reviews}/>
        </main>
    )
}
