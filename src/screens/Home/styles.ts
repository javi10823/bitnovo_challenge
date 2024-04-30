import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';

interface StyledRowProps {
  paddingLeft?: number;
  marginBottom?: number;
  paddingRight?: number;
  marginTop?: number;
  width?: string | number;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
}

export const Section = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
`;

export const NumberInputContainer = styled(Container)`
  flex: 0.2;
  flex-direction: row;
`;

export const TextInputContainer = styled(Container)`
  flex: 0.2;
`;

export const ButtonContainer = styled(Container)`
  flex: 0.6;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 15px;
`;

export const StyledRow = styled.View<StyledRowProps>`
  padding-left: ${props =>
    props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  padding-right: ${props =>
    props.paddingRight ? `${props.paddingRight}px` : '0px'};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : '0px')};
  width: ${props =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
`;
