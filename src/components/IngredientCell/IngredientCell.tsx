import styled from "styled-components/native";
import { useTheme } from "styled-components/native";
import ingredientCell from "../../assets/images/ingredientCell.png";
import { Image, TouchableOpacity } from "react-native";

interface NewCellProps {
    id: BigInteger;
    name: string;
    description: string;
    width: string;
    height: string;
    handleClick: () => void;
}

export function IngredientCell({id,name,description,width, height, handleClick }: NewCellProps) {
  const theme = useTheme();

  return (
    <Container 
        width={width} 
        height={height}
        onPress={handleClick}
    >
      <Image source={ingredientCell} />
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ width: string; height: string }>`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
`;
