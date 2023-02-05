import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #ccc;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`;
