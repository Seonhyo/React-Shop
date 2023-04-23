import products from './products.json'

export const ProductData = products.map((item, index) => {
    return (
        <div>
            <p key={index}>
                <img src={`${item.image}`} />
            </p>
        </div>
    )
})





// List<List<Object>> tmp = mapper.readValue(jsonStr, ArrayList.class);