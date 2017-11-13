import React, {Component} from 'react';
import {ListItem, Thumbnail, Text, Body} from 'native-base';

export const CardT = ({index, lista}) => {

  const {responsable, direccion, title} = lista;

  return (
    <ListItem>
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
