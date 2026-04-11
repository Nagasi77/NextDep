// === BAGIAN 1 CSR ===
// import { useRouter } from "next/router"
// import useSWR from "swr"
// import fetcher from "../../utils/swr/fetcher"
// import DetailProduk from "../../views/DetailProduk"

// const HalamanProduk = () => {
//   const { query } = useRouter()
//   const { data, isLoading } = useSWR(
//     query.produk ? "/api/produk/" + query.produk : null,
//     fetcher
//   )
//   return (
//     <div>
//       <DetailProduk products={isLoading ? {} : data?.data} />
//     </div>
//   )
// }
// export default HalamanProduk

// === BAGIAN 2 SSR ===
// import DetailProduk from "../../views/DetailProduk"
// import { ProductType } from "../../types/product.type"

// const HalamanProduk = ({ product }: { product: ProductType }) => {
//   return (
//     <div>
//       <DetailProduk products={product} />
//     </div>
//   )
// }
// export default HalamanProduk

// export async function getServerSideProps({ params }: { params: { produk: string } }) {
//   const res = await fetch("http://localhost:3000/api/produk/" + params.produk)
//   const response = await res.json()
//   return {
//     props: {
//       product: response.data
//     }
//   }
// }

// === BAGIAN 3 SSG ===
import DetailProduk from "../../views/DetailProduk"
import { ProductType } from "../../types/product.type"

const HalamanProduk = ({ product }: { product: ProductType }) => {
return (
<div>
<DetailProduk products={product} />
</div>
)
}
export default HalamanProduk

export async function getStaticPaths() {
const res = await fetch("http://localhost:3000/api/produk")
const response = await res.json()
const paths = response.data.map((product: ProductType) => ({
params: { produk: product.id }
}))
return {
paths,
fallback: false
}
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
const res = await fetch("http://localhost:3000/api/produk/" + params.produk)
const response = await res.json()
return {
props: {
product: response.data
}
}
}