function Clothes({clothesProp}) {
    return (
        <div className='products'>
            {clothesProp.map((element => {
                const{id, name, price, image} = element;
                return (
                    <div key={id} className='product-card'>
                        <img src={image} width='300px' height='420px' alt='clothes'/>
                        <div>
                            <h3>{name}</h3>
                            <h3>$ {price}</h3>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;