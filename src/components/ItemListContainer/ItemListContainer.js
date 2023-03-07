import './ItemListContainer.scss'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="list-container">
            <h2 className="list-container__title"> ItemListContainer</h2>
            <br/>
            <p>{greeting}</p>
        </div>
    )
} 

export default ItemListContainer