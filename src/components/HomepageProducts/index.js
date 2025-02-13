import ProductItem from "../ProductItem";
import styles from "./styles.module.css";

import products from "@site/src/products/products.js";

/**
 * 首页的商品列表
 * @returns
 */
export default function HomepageProducts() {
    /**
     * @type {ProductItemInfo[]}
     */
    let productArray = [];
    Object.keys(products).forEach((productName) => {
        let productInfo = products[productName];
        productArray.push({...productInfo, name: productName});
    })
    
    return (
        <section className={styles.products}>
            {productArray.map((props, idx) => (
                <ProductItem key={idx} {...props} />
            ))}
        </section>
    );
}