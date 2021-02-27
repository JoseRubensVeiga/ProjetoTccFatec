import React from 'react';
import styled from 'styled-components/native';

import {KeyboardAvoidingView} from 'react-native';

const Container = ({children}) => (
  <KeyboardAvoidingView behavior="position">{children}</KeyboardAvoidingView>
);

export const ViewContainer = styled(Container)`
  flex: 1;
`;
