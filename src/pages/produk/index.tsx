import { useEffect, useState } from "react";
import TampilanProduk from "../../views/produk"; 
import { ProductType } from "../../types/product.type";

const ProdukPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};

export default ProdukPage;