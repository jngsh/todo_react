import { useSearchParams } from "react-router-dom";

function ProductDetail2(){

    const [xxx, yyy] = useSearchParams();
    console.log(xxx, yyy);
    const id = xxx.get("id");
    const pw = xxx.get("pw");
    console.log("id:", id);
    console.log("pw:", pw);

    return(
        <>
            <h2>ProductDetail2</h2>
            선택한 id: {id}<br/>
            {/* 선택한 pw: {pw} */}
        </>
    );
}

export default ProductDetail2;