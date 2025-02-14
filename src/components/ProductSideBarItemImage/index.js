import styles from "./styles.module.css";

function ProductSideBarItemImage({ docid }) {
    let image = docid.slice(0, docid.length - 6);
    return (
        <div className={styles.productImageWrapper}>
            <div className={styles.productImageInnerWrapper}>
                <img src={`img/products/${image}.webp`} className={styles.productImage} />
            </div>
        </div>
    );
}

export default ProductSideBarItemImage;