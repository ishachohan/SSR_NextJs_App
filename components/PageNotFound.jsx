import React from "react";
import styled from "styled-components";

const MsgText = styled.label`
position: absolute;
left: 300px;
top: 300px;

font-family: Montserrat;
font-style: normal;
font-weight: 200 !important;
font-size: 4em !important;
line-height: 15px;

color: #F65261;
text-align: center !important
`;

const PageNotFound = () => {
    console.log("inside page not found")
    return(
            <MsgText>Page Not Found</MsgText>
    )
}
export default PageNotFound;