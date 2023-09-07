import CheckPrice from "./checkprice/page";

//we could wright this function in other components
const findData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
};
export default async function prodeuctlistserver() {
    const fdata = await findData();
    console.log(fdata);
    return (
        <div>
            <h1 className="text-center font-bold">product list from server</h1>
            {fdata.map((item) => {
                return (
                    <div className="text-center">
                        <h1>{item.title}</h1>
                        <img src={item.thumbnail} className="mx-auto" alt="img" />
                        <CheckPrice price={item.price} />
                    </div>
                );
            })}
        </div>
    );
}
