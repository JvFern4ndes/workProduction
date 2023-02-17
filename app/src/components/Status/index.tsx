import { useState } from 'react';
import { FlatList } from 'react-native';

import { status } from '../../mocks/status';
import { Text } from '../Text';

import { StatusStyle, Icon } from './styles';

export function Status() {
  const [selectedStatus, setSelectedStatus] = useState('');

  function handleSelectStatus(statusName: string) {
    const status = selectedStatus === statusName ? '' : statusName;

    setSelectedStatus(status);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={status}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={status => status.name}
      renderItem={({ item: status }) => {
        const isSelected = selectedStatus === status.name;

        return (
          <StatusStyle key={status.name} onPress={() => handleSelectStatus(status.name)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {status.icon}
              </Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {status.name}
            </Text>
          </StatusStyle>
        );
      }}
    />
  );
}
