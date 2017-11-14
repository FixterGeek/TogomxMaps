import React, {Component} from 'react';
import {ListItem, Thumbnail, Text, Body} from 'native-base';

export const CardT = ({lista, }) => {

  const {direccion, title, uid} = lista;



  return (
    <ListItem onPress={()=>alert(uid)}>
      <Thumbnail square size={80} source={{
          uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
        }}/>
      <Body>
        <Text>{title}</Text>
        <Text note="note">{direccion}</Text>
      </Body>
  </ListItem>
  );
};
