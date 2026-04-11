import { useRouter } from "next/router";

const HalamanToko = () => {
  const { query } = useRouter();
  const slug = query.slug || [];

  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>Toko: {Array.isArray(slug) ? slug.join("-") : slug}</p>
    </div>
  );
};

export default HalamanToko;