import React,{useEffect} from 'react'
import Product from '../component/Product';
// import axios from 'axios';
import LoaderBox from '../component/LoaderBox';
import MessageBox from '../component/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen(props) {


    // const [products,setProducts] = useState([]);
    // const [error,setError] = useState(false);
    // const [loading,setLoading] = useState(false);

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    
    useEffect(() => {

        // const fetchData = async () =>{
        //     try {
        //         setLoading(true);
        //         const { data } = await axios.get('/api/products');
        //         setLoading(false);
        //         setProducts(data);
        //     } catch (error) {
        //         setError(error.message);
        //         setLoading(false);
        //     }
            
        // };

        // fetchData();

        dispatch(listProducts());
  }, [dispatch]);

    return (
        <div>
            {loading ? <LoaderBox></LoaderBox> : 
            error ? (<MessageBox variant="danger">{error}</MessageBox> ) :
            (
                <div className="row center">
                    {
                        products.map((product)=>{
                            return(
                                <Product key={product._id} product={product}></Product>
                            )
                        })
                    }
            
                </div>
            )}
            
        </div>
    )
}

