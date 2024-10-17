import './style.css'
export default function Vegetables({vegetables}){
    const items ={
        color: "red",
    }
    return(
        <div className="">
            <div className="box">
                {
                    vegetables.stocked ? <span>{vegetables.name}</span> :  <span style={items}>{vegetables.name}</span>
                }
                <span>{vegetables.price}</span>
            </div>
        </div>
    )
}