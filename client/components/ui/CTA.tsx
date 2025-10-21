import React from 'react';
import styled from 'styled-components';

export const CTA = () => {
  return (
    <CTAWrapper>
      <CTAContainer>
        <CTAColumn>
          <CTAContent>
            <CTATitle>Bring your events to life</CTATitle>
            <CTADescription>Everything you need to create, manage, and elevate your events.</CTADescription>
          </CTAContent>
          <CTAButton>
            <ButtonText>Get started</ButtonText>
          </CTAButton>
        </CTAColumn>
      </CTAContainer>
    </CTAWrapper>
  );
};

const CTAWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 7rem 4rem;
  gap: 5rem;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    gap: 3rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  max-width: 1280px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

const CTAColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  background-color: #ffffff;
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  text-align: center;
  vertical-align: top;
  font-size: 48px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  letter-spacing: -2%;
  line-height: 60%;
  color: #000000;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const CTADescription = styled.p`
  text-align: center;
  vertical-align: top;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  line-height: 150%;
  color: #000000;
  margin: 0;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButton = styled.button`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 2rem;
  gap: 0.5rem;
  background-color: #063646;
  border: 2px solid #063646;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #0a7a94;
    border-color: #0a7a94;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(6, 54, 70, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.5rem;
  }
`;

const ButtonText = styled.span`
  text-align: left;
  vertical-align: top;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
`;