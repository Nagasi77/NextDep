
import styles from "../../styles/product.module.css"; 
import { ProductType } from "../../types/product.type";
import Link from "next/link";

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk_title}>Daftar Produk</h1>
      <div className={styles.produk_content}>
        {products?.map((product: ProductType) => (
          <Link href={"/produk/" + product.id} key={product.id} passHref legacyBehavior>
<a className={styles.produk_content_item}>
<div className={styles.produk_content_item_image}>
<img src={product.image} alt={product.name} width={200} />
</div>
<h4 className={styles.produk_content_item_name}>{product.name}</h4>
<p className={styles.produk_content_item_category}>{product.category}</p>
<p className={styles.produk_content_item_price}>Rp {product.price.toLocaleString("id-ID")}</p>
</a>
</Link>
        ))}
      </div>
    </div>
  );
};

export default TampilanProduk;