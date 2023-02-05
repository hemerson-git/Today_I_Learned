import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
  padding-top: 40px;
  padding-left: 22px;
  padding-right: 22px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
`;

export const PostText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const Content = styled.ScrollView`
  padding-top: 100px;
  padding-bottom: 20px;
`;
