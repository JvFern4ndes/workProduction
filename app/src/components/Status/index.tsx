import { FlatList } from 'react-native';

import { status } from '../../mocks/status';
import { Text } from '../Text';

import { StatusStyle, Icon } from './styles';

export function Status() {
  return (
    <FlatList
      data={status}
      keyExtractor={status => status.name}
      renderItem={({ item: status }) => (
        <StatusStyle key={status.name}>
          <Icon>
            <Text>{status.icon}</Text>
          </Icon>

          <Text size={14} weight="600">{status.name}</Text>
        </StatusStyle>
      )}
    />
  );
}
