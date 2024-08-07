import { useParams } from "react-router-dom";

function ProductDetail(){

    const {id} = useParams();
    console.log(id);

    return(
        <>
            <h2>ProductDetail</h2>
            선택한 id: {id}
        </>
    );
}

export default ProductDetail;