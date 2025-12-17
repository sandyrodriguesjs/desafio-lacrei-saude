import styled from "styled-components";
import { textBase } from "../../designTokens/tipography";
import { textXs } from "../../designTokens/tipography";
import { colorBorderDivider, colorIconAccent } from "../../designTokens/colorTokens";
import { colors }  from "../../designTokens/colors";
import { colorBackgroundDefault } from "../../designTokens/colorTokens";
import { colorBorderHover } from "../../designTokens/colorTokens";
import { fontPrimary } from "../../designTokens/fonts";
import { spacingLayoutL } from "../../designTokens/spacing";
import 
{ 
  spacingS, 
  spacingL, 
  spacingM 
} from "../../designTokens/spacing";

export const Container = styled.footer`
  width: 100%;
  min-height: 280px;
  ${colorBackgroundDefault};
  border-top: 1px solid #e0e0e0;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${spacingLayoutL};

  display: flex;
  flex-direction: column;
  gap: ${spacingL};

  contain: layout paint;

  @media (max-width: 768px) {
    gap: ${spacingM};
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacingM};
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: ${spacingM};

  a {
    ${fontPrimary}
    ${textBase};
    color: ${colors.gray70};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacingS}
  }
`;

const BaseBackToTop = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${colorBorderHover};
  ${colorBackgroundDefault};
  box-shadow: 0px 8px 10px #0000004D;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background: #f3fdfb;
  }
`;

export const BackToTopDesktop = styled(BaseBackToTop)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackToTopMobile = styled(BaseBackToTop)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SocialRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacingS}
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${spacingS};
`;

export const SocialButton = styled.button`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  ${colorIconAccent};

  background: none;
  border: none;
  cursor: pointer;
`;

export const LegalText = styled.p`
  ${textXs};
  color: ${colors.gray70};

  &.desktop-only {
    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const SocialAndCnpjRow = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  strok: 1px;
  border: solid 1px ${colorBorderDivider}
`;