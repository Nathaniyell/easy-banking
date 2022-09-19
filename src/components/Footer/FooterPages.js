import styled from 'styled-components'
import React from 'react'

const Ul = styled.ul`
li{
    cursor: pointer;
    list-style: none;

}
li:hover{
    color: hsl(136, 65%, 51%);
}
`

const FooterPages = ({a, b, c, d, e}) => {
    return (

        <Ul>
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
            <li>{d}</li>
            <li>{e}</li>
        </Ul>

    )
}

export default FooterPages