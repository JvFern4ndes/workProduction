import { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Button } from '../Button';

import {
  ModalBody,
  Overlay,
  Header,
  Form,
  MachineInput,
  OperationInput,
} from './styles';
import { api } from '../../utils/api';
import { Machine } from '../../types/Machine';
import { Operation } from '../../types/Operation';

interface MachineModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (machine: SelectedProductionOption, operation: SelectedOperationOption) => void;
}

interface Machines {
  label: string
  value: string
}

interface Operations {
  label: string
  value: string
}

export interface SelectedProductionOption {
  label: string
  id: string
}

export interface SelectedOperationOption {
  label: string
  id: string
}

export function MachineModal({ visible, onClose, onSave }: MachineModalProps) {
  const [machine, setMachine] = useState<SelectedProductionOption | null>(null);
  const [machines, setMachines] = useState<Machines[]>([]);

  const [operation, setOperation] = useState<SelectedOperationOption | null>(null);
  const [operations, setOperations] = useState<Operations[]>([]);

  const [isFetchingMachines, setIsFetchingMachines] = useState<boolean>( true );
  const [isFetchingOperations, setIsFetchingOperations] = useState<boolean>( true );

  useEffect(() => {
    (async () => {
      try {
        const availableMachines = await api.get<Machine[]>('/machines');

        const machinesToSelectOptions = availableMachines?.data?.map(({ _id, name }) => ({
          label: name,
          value: _id,
          key: _id
        }));

        setMachines(machinesToSelectOptions);
      } catch ( err: any ) {
        console.error(err.message);
      } finally {
        setIsFetchingMachines(false);
      }

    })();

    (async () => {
      try {
        const availableOperations = await api.get<Operation[]>('/operations');

        const operationsToSelectOptions = availableOperations?.data?.map(({ _id, name }) => ({
          label: name,
          value: _id,
          key: _id
        }));

        setOperations(operationsToSelectOptions);
      } catch ( err: any ) {
        console.error(err.message);
      } finally {
        setIsFetchingOperations(false);
      }

    })();
  }, []);

  function handleConfirm() {
    if ( machine && operation ) {
      onSave(machine, operation);
      setMachine(null);
      onClose();
    }
  }

  function handleMachineChange(value: string, _: number) {
    const _machine = machines.find(({ value: machineId }) => machineId === value);

    if ( _machine ) {
      setMachine({
        id: _machine.value,
        label: _machine.label
      });
    }
  }

  function handleOperationChange(value: string, _: number) {
    const _operation = operations.find(({ value: operationId }) => operationId === value);

    if ( _operation ) {
      setOperation({
        id: _operation.value,
        label: _operation.label
      });
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Selecione as opções</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>

          <Form>
            <MachineInput>
              {isFetchingMachines
                ? <Text>Aguarde, buscando máquinas disponíveis...</Text>
                : (
                  <RNPickerSelect
                    items={machines}
                    onValueChange={handleMachineChange}
                    placeholder={{
                      inputLabel: 'Selecione a máquina',
                      label: 'Selecione a máquina',
                    }}
                    itemKey={Date.now()}
                  />
                )}
            </MachineInput>

            <OperationInput>
              {isFetchingOperations
                ? <Text>Aguarde, carregando as operações</Text>
                : (
                  <RNPickerSelect
                    items={operations}
                    onValueChange={handleOperationChange}
                    placeholder={{
                      inputLabel: 'Selecione a operação',
                      label: 'Selecione a operação',
                    }}
                    itemKey={Date.now()}
                  />
                )}
            </OperationInput>

            <Button
              onPress={handleConfirm}
              disabled={machine && operation ? false : true}
            >
              Confirmar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
