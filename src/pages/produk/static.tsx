import TampilanProduk from "../../views/produk"
import { ProductType } from "../../types/product.type"

const HalamanProdukStatic = ({ products }: { products: ProductType[] }) => {
return (
<div>
<h1>Halaman Produk Static</h1>
<TampilanProduk products={products} />
</div>
)
}

export default HalamanProdukStatic

export async function getStaticProps() {
const res = await fetch("http://localhost:3000/api/produk")
const response = await res.json()

return {
props: {
products: response.data,
},
revalidate: 10,
}
}