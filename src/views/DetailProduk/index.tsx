import { ProductType } from "../../types/product.type";
import styles from "../../styles/detailProduct.module.scss";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail_image}>
          {/* Tambahkan tanda tanya (?) setelah products */}
          <img src={products?.image} alt={products?.name} />
        </div>
        <div className={styles.produkdetail_info}>
          {/* Tambahkan juga di name, category, dan price */}
          <h1 className={styles.produkdetail_name}>{products?.name}</h1>
          <p className={styles.produkdetail_category}>{products?.category}</p>
          <p className={styles.produkdetail_price}>
            {/* Pengecekan agar toLocaleString tidak error jika price undefined */}
            Rp {products?.price ? products.price.toLocaleString("id-ID") : 0}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;