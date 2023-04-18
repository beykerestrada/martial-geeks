import "./Loading.scss"

export const Loading = ()  => {


    return (

        <div className="loading-container">
            <div className="loading">
                <h2>Cargando...</h2>
                <div className="loading-img-container">
                    <img src="https://martial-geeks.s3.sa-east-1.amazonaws.com/gloves.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}