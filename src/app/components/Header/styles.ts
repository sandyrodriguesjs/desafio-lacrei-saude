import styled from "styled-components";
import {
  colorBackgroundDefault,
  colorBackgroundAccent,
  colorTextAccent,
  colorTextInvert,
  colorIconInvert,
} from "../../designTokens/colorTokens";
import { textXlHigh200 } from "../../designTokens/tipography";
import {
  spacingS,
  spacingM,
  spacingL,
} from "../../designTokens/spacing";

export const Container = styled.header`
  width: 100%;
  ${colorBackgroundDefault};
  border-bottom: 1px solid #eeeeee;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  /* DESKTOP */
  padding: ${spacingM} ${spacingL}; /* 24px | 32px */

  display: flex;
  align-items: center;
  justify-content: space-between;

  contain: layout paint;

  /* MOBILE */
  @media (max-width: 768px) {
    padding: ${spacingM} ${spacingS}; /* 24px | 16px */
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 169px;
    height: 48px;
  }

  @media (max-width: 768px) {
    img {
      width: 133.67px;
      height: 16px;
    }
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacingM}; /* 24px */

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 10px 32px;
  gap: 8px;

  ${colorBackgroundDefault};
  ${colorTextAccent};
  ${textXlHigh200};

  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f3fdfb;
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  ${colorBackgroundAccent};
  ${colorTextInvert};
`;

export const MobileButtons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${spacingM}; /* 24px */
  }
`;

export const HelpButton = styled.button`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${colorBackgroundDefault};
  ${colorTextAccent};

  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const LoginIconButton = styled.button`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${colorBackgroundAccent};
  ${colorIconInvert};

  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
