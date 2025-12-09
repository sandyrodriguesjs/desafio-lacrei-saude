import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  width: 100%;
  min-height: 80vh;

  background: #ffffff; 

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 64px 96px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 32px 24px;
    text-align: center;
  }
`;


export const MainContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  color: #2d2d2d;

  @media (max-width: 900px) {
    font-size: 36px;
    line-height: 44px;
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: #4d4d4d;
  max-width: 520px;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SolidButton = styled.button`
  height: 48px;
  padding: 10px 32px;

  border-radius: 8px;
  border: none;

  background: #018762;
  color: #ffffff;

  font-size: 16px;
  font-weight: 700;

  box-shadow: 0px 8px 16px rgba(1, 135, 98, 0.25);

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #017256;
  }
`;

export const OutlineButton = styled.button`
  height: 48px;
  padding: 10px 32px;

  border-radius: 8px;
  border: 2px solid #018762;

  background: #ffffff;
  color: #018762;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f3fdfb;
  }
`;
