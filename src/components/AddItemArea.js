import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const AddItemArea = styled.View`
    background-color: #CCC;
    padding: 10px;
    flex-direction: row;
    align-items: center;
`

const AddItemInput = styled.TextInput`
    background-color: #FFF;
    font-size: 15px;
    height:50px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    flex:1;
`

export default (props) => {
    const [item, setItem] = useState('');

    const handleSubmit = () => {
        if(item.trim()) {
            props.onAdd(item)
        }

        setItem('');
    }

    return (
        <AddItemArea>
            <AddItemInput
                placeholder="Digite um novo item"
                value={item}
                onChangeText={t => setItem(t)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AddItemArea>
    );
}