function Buttons({filterProp}) {
    return (
        <div className='container-for-btn'>
            <button className='btn-style' onClick={() => filterProp("scarfs")}>SCARFS</button>
            <button className='btn-style'onClick={() => filterProp("hats")}>HATS</button>
            <button className='btn-style' onClick={() => filterProp("jewellery")}>JEWELLERY</button>
            <button className='btn-style' onClick={() => filterProp("sunglasses")}>SUNGLASSES</button>
            <button className='btn-style' onClick={() => filterProp("belts")}>BELTS</button>
        </div>
    )
}

export default Buttons;