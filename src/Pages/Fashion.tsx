import styled from "@emotion/styled"

const Fashion = () => {
    return (
        <Section>
            <H2>패션</H2>
            <ul className='flex basis-8 items-center'>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' />
                        <Div>
                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                            <p>$110</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' />
                        <Div>
                            <p>Mens Casual Premium Slim Fit T-Shirts</p>
                            <p>$22</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' />
                        <Div>
                            <p>Mens Cotton Jacket</p>
                            <p>$56</p>
                        </Div>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' />
                        <Div>
                            <p>Mens Casual Slim Fit</p>
                            <p>$16</p>
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
  margin-bottom: 40px;
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

export default Fashion