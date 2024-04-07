import { useEffect, useState } from "react";

const Leftside = () => {

    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch('../../../public/categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);



    return (
        <div>
            <h2 className="text-4xl font-bold mb-4">News Category</h2>
            <div>
                {
                    category.map(c => <h2 key={c.id} className="text-xl font-semibold mb-3">{c.name}</h2>)
                }
            </div>
        </div>
    );
};

export default Leftside;