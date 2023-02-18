import { SvgUri } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import React from 'react';

import { Text } from '../Text';
import { Container, OrderContent, OrderHeader, MachineContainer, Machine } from './styles';

interface HeaderProps {
  selectedMachine: string;
  onCancelOrder: () => void;
}

export function Header({ selectedMachine, onCancelOrder }: HeaderProps) {
  return (
    <>
      <Container>
        {!selectedMachine && (
          <SvgUri
            width="180px"
            height="180px"
            uri="https://delian.s3.sa-east-1.amazonaws.com/logo.svg"
          />
        )}

        {selectedMachine && (
          <OrderContent>
            <OrderHeader>
              <Text size={24} weight="600" color='#6d797e'>Pedido</Text>

              <TouchableOpacity onPress={onCancelOrder}>
                <Text color='#ec3252' weight='600' size={14}>
              cancelar pedido
                </Text>
              </TouchableOpacity>
            </OrderHeader>
          </OrderContent>
        )}
      </Container>

      <MachineContainer>
        {selectedMachine && (
          <Machine>
            <Text color='#6d797e'>Máquina: {selectedMachine}</Text>
          </Machine>
        )}
      </MachineContainer></>
  );
}
