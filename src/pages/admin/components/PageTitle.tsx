import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.smallFontSize};
  color: ${({ theme }) => theme.textLightGrayColor};
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 26px;
  color: ${({ theme }) => theme.textBlackColor};
  font-weight: 600;
  margin-bottom: 20px;
`;

const HashTags = styled.ul`
  display: flex;
  color: ${({ theme }) => theme.textDarkGrayColor};
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.normalFontSize};
`;

const HashTag = styled.li`
  margin-right: 20px;
`;

const ReactionContainer = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.normalFontSize};
  margin-bottom: 40px;
`;

const ReactionWrapper = styled.div`
  display: flex;
  margin-right: 20px;
`;

const ReactionTitle = styled.span`
  color: ${({ theme }) => theme.textLightGrayColor};
`;

const ReactionCount = styled.span`
  color: ${({ theme }) => theme.textDarkGrayColor};
  margin-left: 10px;
`;

function PageTitle() {
  return (
    <Container>
      <Date>2022.01.12 17:55</Date>
      <Title>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방</Title>
      <HashTags>
        <HashTag>#방꾸미기</HashTag>
        <HashTag>#우드톤</HashTag>
        <HashTag>#화이트</HashTag>
        <HashTag>#라탄</HashTag>
      </HashTags>
      <ReactionContainer>
        <ReactionWrapper>
          <ReactionTitle>보관함</ReactionTitle>
          <ReactionCount>95</ReactionCount>
        </ReactionWrapper>
        <ReactionWrapper>
          <ReactionTitle>댓글</ReactionTitle>
          <ReactionCount>0</ReactionCount>
        </ReactionWrapper>
      </ReactionContainer>
    </Container>
  );
}

export default PageTitle;
