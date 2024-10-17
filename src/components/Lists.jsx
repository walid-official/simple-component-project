import './style.css'
export default function Lists({lists}) {
    console.log(lists);
    const styleItems ={
        color: "red",
    }
    return(
        <div className="">
            <div className="box">
                {
                    lists.stocked ? <span>{lists.name}</span> : <span style={styleItems}>{lists.name}</span>
                }
                <span>{lists.price}</span>
            </div>
        </div>
    )
}
