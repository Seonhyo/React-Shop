import styled from "@emotion/styled"

const Digital = () => {
    return (
        <Section>
            <H2>디지털</H2>
            <ul className='flex basis-8 items-center'>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg' />
                        <Div>
                            <p>WD 2TB Elements Portable External Hard Drive - USB 3.0</p>
                            <p>$64</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg' />
                        <Div>
                            <p>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</p>
                            <p>$109</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg' />
                        <Div>
                            <p>Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</p>
                            <p>$109</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg' />
                        <Div>
                            <p>WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive</p>
                            <p>$114</p>
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

export default Digital