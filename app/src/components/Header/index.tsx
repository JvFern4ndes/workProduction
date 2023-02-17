import { SvgUri } from 'react-native-svg';

import { Container } from './styles';
import React from 'react';

export function Header() {
  return (
    <Container>
      <SvgUri
        width="180px"
        height="180px"
        uri="https://delian.s3.sa-east-1.amazonaws.com/logo.svg"
      />
    </Container>
  );
}
