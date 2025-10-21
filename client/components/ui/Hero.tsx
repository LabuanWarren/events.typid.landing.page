import React from 'react';
import styled from 'styled-components';

export const Hero = () => {
  return (
    <HeroHeader>
      <HeroCard>
        <HeroColumn>
          <HeroContent>
            <Title>Run events that feel effortless</Title>
            <Subtitle>From setup to sales, Events by Typid gives you the power to create, manage, and customize every part of your event experience —  all in one dashboard.</Subtitle>
          </HeroContent>
          <HeroActions>
            <HeroLink>
              <LinkText>
                <LinkTextContent>Sign up</LinkTextContent>
              </LinkText>
              <LinkIcon>
                <img src="/arrow-right.svg" alt="Arrow right" />
              </LinkIcon>
            </HeroLink>
          </HeroActions>
        </HeroColumn>
        <HeroFrame>
          <img src="/Dashboard.webp" alt="Dashboard overview" />
          <img src="/DashboardModal.webp" alt="Modal overview" />
        </HeroFrame>
      </HeroCard>
    </HeroHeader>
  );
};

const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  gap: 5rem;
`;

const HeroCard = styled.div`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f8f9fb;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  gap: 2rem;

  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 72px;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: -2%;
  line-height: 90%;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 18px;
  font-family: 'DM Sans', sans-serif;
  line-height: 28px;
  color: #000000;
  max-width: 600px;
`;

const HeroActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

const HeroLink = styled.a`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f8f9fb;
  border: 0.125rem solid #0d0f1b;
  cursor: pointer;
  
  &:hover {
    background-color: #e8eaef;
  }
`;

const LinkText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.5rem;
`;

const LinkTextContent = styled.span`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  line-height: 24px;
  color: #0d0f1b;
  font-weight: 500;
`;

const LinkIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.625rem;
  
  img {
    height: 24px;
    width: 24px;
  }
`;

const HeroFrame = styled.div`
  display: flex;
  position: relative;
  height: 696px;
  width: 696px;
  overflow: visible;
  
  img:first-child {
    position: absolute;
    top: 0;
    right: 0;
    height: 508px;
    width: auto;
    max-width: 723px;
    object-fit: contain; /* prevent cropping */
    filter: drop-shadow(0 20px 60px rgba(0,0,0,0.12));
  }
  
  img:last-child {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 286px;
    width: auto;
    max-width: 297px;
    object-fit: contain; /* prevent cropping */
    filter: drop-shadow(0 10px 30px rgba(0,0,0,0.12));
  }
  
  @media (max-width: 768px) {
    height: 400px;
    width: 100%;
    
    img:first-child {
      width: 100%;
      height: auto;
      max-height: 300px;
    }
    
    img:last-child {
      width: auto;
      height: auto;
      max-width: 200px;
      max-height: 180px;
    }
  }
`;