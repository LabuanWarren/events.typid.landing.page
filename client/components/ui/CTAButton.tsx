import React from 'react';
import styled from 'styled-components';

interface CTAButtonProps {
  label: string;
  href?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ label, href = '#' }) => {
  return (
    <ButtonRoot href={href} aria-label={label}>
      <TextWrapper>
        <ButtonLabel>{label}</ButtonLabel>
      </TextWrapper>
      <IconWrapper>
        <img src="/arrow-right.svg" alt="Arrow" />
      </IconWrapper>
    </ButtonRoot>
  );
};

const ButtonRoot = styled.a`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, #16BCF9 0%, #1CDDF4 100%);
  color: #000000;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 6px 20px rgba(28, 221, 244, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(28, 221, 244, 0.45);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(28, 221, 244, 0.25);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.5rem;
`;

const ButtonLabel = styled.span`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  line-height: 24px;
  color: #000000;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.625rem;

  img {
    height: 24px;
    width: 24px;
    filter: none;
  }
`;


