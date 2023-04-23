import styled from "@emotion/styled"

const ButtonDetail = () => {
    return (
        <>
            <a href='/'><P>패션</P></a>
            <a href='/'><P>액세서리</P></a>
            <a href='/'><P>디지털</P></a>
        </>
    )
}

const P = styled.div`
    margin: auto 12px;
    font-weight: bold;
`

export default ButtonDetail