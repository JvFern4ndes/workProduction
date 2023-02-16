import { Text } from '../Text';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Text size={14} opacity={0.9}>Bem-vindo(a) ao:</Text>
      <Text size={24} weight="700">
        Delian
        <Text size={24}>Connect</Text>
      </Text>
    </Container>
  );
}
