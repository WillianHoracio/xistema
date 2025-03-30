import styled from "styled-components/native";
import { useTheme } from "styled-components/native";
import plusImage from "../../assets/images/plus.png";
import { Image, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";

// Agora a tipagem de width e height é string
const Container = styled.TouchableOpacity<{ width: string; height: string }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
`;

interface NewCellProps {
  width: string;
  height: string;
  handleClick: () => void;
}

export function NewCell({ width, height, handleClick }: NewCellProps) {
  const theme = useTheme();

  return (
    <Container 
        width={width} 
        height={height}
        onPress={handleClick}
    >
      <Image source={plusImage} />
    </Container>
  );
}
