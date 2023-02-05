import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #000;
  padding-left: 22px;
  padding-right: 22px;
`;

export const Post = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const PostTitle = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const PostImage = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const Description = styled.Text`
  color: #c6c6ce;
  font-size: 14px;
`;
