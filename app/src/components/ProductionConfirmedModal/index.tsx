import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface ProductionConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function ProductionConfirmedModal({ visible, onOk }: ProductionConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
    >
      <Container>
        <CheckCircle />

        <Text size={20} weight="600" color='#fff' style={{ marginTop: 12 }}>
          Pronto
        </Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton onPress={onOk}>
          <Text color='#000' weight='600'>
            OK
          </Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
