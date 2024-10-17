import './style.css'
import Lists from './Lists'
import Vegetables from './Vegetables';

export default function Table({products}){
    console.log(products)
    return(
        <div className="container">
            <div className="box">
                <span>Name</span>
                <span>Price</span>
            </div>
            <div className="position">
                <h2>Fruits</h2>
            </div>
            {
                products.map(product => <Lists  lists={product.category == "Fruits" && product}></Lists>)
            }
            <div className="position">
                <h2>Vegetables</h2>
            </div>
            {
                products.map(vegetable => <Vegetables vegetables={vegetable.category == "Vegetables" && vegetable}></Vegetables>)
            }
            
        </div>
    )
}