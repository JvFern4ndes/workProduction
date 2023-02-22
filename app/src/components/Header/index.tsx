import { SvgUri } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import React from 'react';

import { Text } from '../Text';
import {
  Container,
  OrderContent,
  OrderHeader,
  ProductionOptionsHeader,
} from './styles';

import { SelectedOperationOption, SelectedProductionOption } from '../MachineModal';

interface HeaderProps {
  selectedMachine: SelectedProductionOption;
  selectedOperation: SelectedOperationOption;
  onCancelOrder: () => void;
}

export function Header({ selectedMachine, selectedOperation, onCancelOrder }: HeaderProps) {

  console.log({selectedMachine, selectedOperation});

  return (
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
            <ProductionOptionsHeader>
              <Text size={24} weight="600" color='#6d797e'>{selectedMachine.label}</Text>
              <Text size={18} weight="600" color='#6d797e'>{selectedOperation.label}</Text>
            </ProductionOptionsHeader>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text color='#ec3252' weight='600' size={14}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </OrderHeader>
        </OrderContent>
      )}
    </Container>
  );
}
