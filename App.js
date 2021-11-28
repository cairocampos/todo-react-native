import React, { useEffect, useState } from 'react'
import lista from './src/lista';
import uuid from 'react-native-uuid'
import { SwipeListView } from "react-native-swipe-list-view";

import styled from 'styled-components';
import ListaItem from './src/components/ListaItem'
import AddItemArea from './src/components/AddItemArea';
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.SafeAreaView`
  flex:1;
`

const App = () => {
  const [items, setItems] = useState(lista);

  const addNewItem = (item) => {
    setItems([
      {
        id: uuid.v4(),
        task: item,
        done:false
      },
      ...items
    ])
  }

  const toggleDone = (index) => {
    setItems(items.map((i, id) => {
      if(id == index) 
        i.done = !i.done

        return i
    }));
  }

  const deleteItem = index => {
    setItems(items.filter((i, id) => id !== index));
  }

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={items}
        renderItem={({item, index}) => (
            <ListaItem onPress={() => toggleDone(index)} data={item} />
          )         
        }
        renderHiddenItem={({item, index}) => <ListaItemSwipe onDelete={() => deleteItem(index)} />}
        leftOpenValue={50}
        disableLeftSwipe={true}

        keyExtractor={(item) => item.id}
      />
    </Page>
  )
}

export default App;