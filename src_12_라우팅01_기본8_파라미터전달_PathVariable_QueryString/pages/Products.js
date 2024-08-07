import {Link} from 'react-router-dom';

function Products(){

    const arr = [{id:"p1", title:"Product 1"},
                 {id:"p2", title:"Product 2"}, 
                 {id:"p3", title:"Product 3"}
                ];

    return(
        <>
            <h2>Products</h2>
            <h3>1. PathVariable 방식</h3>
            <ul>
                {
                    arr.map((row, idx)=>
                        <li key={idx}>
                            <Link to={`/products/${row.id}`}>
                                {row.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <h3>2. QueryString 방식</h3>
            <ul>
                {
                    arr.map((row, idx)=>
                        <li key={idx}>
                            <Link to={`/products2?id=${row.id}&pw=1234`}>
                                {row.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    );
}

export default Products;