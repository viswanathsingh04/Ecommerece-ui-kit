import React from 'react';
import {View, Text} from 'react-native';
import {
  StyledScrollView,
  StyledText,
  MarginContainer,
} from '../../components/GlobalStyles';
import {withTheme} from 'styled-components';

const Cart = (props) => {
  return (
    <StyledScrollView theme={props.theme}>
      <MarginContainer theme="28px">
        <StyledText
          theme={{color: props.theme.color, size: '24px', weight: 'bold'}}>
          Cart Screen
        </StyledText>
      </MarginContainer>
    </StyledScrollView>
  );
};

export default withTheme(Cart);
