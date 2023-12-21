import "./card.css"

const Card = () =>{
    return(
        <>
            <div className="card mb-6" style={{width: "200px",height:"60px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./card.svg" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-title">$ 0.00</h6>
                            <p className="card-text">2 art.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;