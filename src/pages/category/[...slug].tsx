import {useRouter} from "next/router";

const Kategori = () => {
    const { query } = useRouter();
    const slug = query.slug || [];

    return (
        <div>
            <h1>Daftar Parameter Kategori</h1>
            <ul>
                {Array.isArray(slug) && slug.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Kategori;