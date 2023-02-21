import { useState } from 'react';
import { FlatList } from 'react-native';

import { StatusType } from '../../types/StatusType';
import { Text } from '../Text';

import { StatusContainer, Icon } from './styles';

interface StatusProps {
  status: StatusType[];
  onSelectStatus: (statusId: string) => void;
}

export function Status({ status, onSelectStatus }: StatusProps) {
  const [selectedStatus, setSelectedStatus] = useState('');

  function handleSelectStatus(statusId: string) {
    const status = selectedStatus === statusId ? '' : statusId;

    onSelectStatus(status);
    setSelectedStatus(status);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={status}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={status => status._id}
      renderItem={({ item: status  }) => {
        const isSelected = selectedStatus === status._id;

        return (
          <StatusContainer key={status._id} onPress={() => handleSelectStatus(status._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {status.icon}
              </Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {status.name}
            </Text>
          </StatusContainer>
        );
      }}
    />
  );
}
