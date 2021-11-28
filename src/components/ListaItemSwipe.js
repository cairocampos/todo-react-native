import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const ListaItemSwipe = styled.TouchableHighlight`
    height: 50px;
    background-color: red;
    justify-content: center;
`

const LitaItemIcon = styled.View`
    background-color: #FFF;
    height: 20px;
    width: 20px;
    margin-left: 15px;
`;

export default (props) => {
    return (
        <ListaItemSwipe onPress={() => props.onDelete()} underlayColor="#FF3333">
            <LitaItemIcon></LitaItemIcon>
        </ListaItemSwipe>
    );
}