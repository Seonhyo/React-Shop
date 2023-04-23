import styled from "@emotion/styled"

const Accessory = () => {
    return (
      <Section>
        <H2>액세서리</H2>
        <ul className='flex basis-8 items-center'>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' />
                        <Div>
                            <p>John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet</p>
                            <p>$695</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg' />
                        <Div>
                            <p>Solid Gold Petite Micropave</p>
                            <p>$168</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' />
                        <Div>
                            <p>White Gold Plated Princess</p>
                            <p>$10</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg' />
                        <Div>
                            <p>Pierced Owl Rose Gold Plated Stainless Steel Double</p>
                            <p>$11</p>
                        </Div>
                    </a>
                </li>
            </ul>
      </Section>
    )
}

const Section = styled.div`
    margin-top: 40px;
    padding: 24px 16px;
`


const H2 = styled.h2`
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
`

const Div = styled.div`
    padding: 32px;
    background-color:
    font-size: 1rem;
    line-height: 1.5rem; 
`

export default Accessory