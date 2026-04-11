import { useRouter } from 'next/router'
export default function BlogPost() { const { query } = useRouter(); return <h1>Halaman Blog dengan slug: {query.slug}</h1> }