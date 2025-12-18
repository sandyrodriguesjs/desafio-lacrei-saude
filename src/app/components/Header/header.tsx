"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Content,
  LogoArea,
  NavGroup,
  ButtonBase,
  ButtonPrimary,
  MobileButtons,
  HelpButton,
  LoginIconButton,
} from "./styles";

import { User, HelpCircle } from "lucide-react";

function HeaderComponent() {
  return (
    <Container as="header" role="banner">
      <Content>
       
        <LogoArea>
          <Link href="/" aria-label="Voltar para a página inicial">
            <Image
              src="/LogoHeader.svg"
              width={169}
              height={48}
              alt="Lacrei Saúde"
              loading="eager"
              decoding="async"
            />
          </Link>
        </LogoArea>

        <nav aria-label="Navegação principal">
          <NavGroup>
            <Link href="/3l/QuemSomos">
              <ButtonBase>Quem somos</ButtonBase>
            </Link>

            <Link
              href="https://lacreisaude.com.br/ajuda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonBase>Ajuda</ButtonBase>
            </Link>

            <ButtonPrimary aria-label="Entrar na plataforma">
              Entrar <User size={24} aria-hidden="true" />
            </ButtonPrimary>
          </NavGroup>
        </nav>

      
        <nav aria-label="Ações rápidas">
          <MobileButtons>
            <HelpButton
              aria-label="Acessar ajuda"
              onClick={() =>
                window.open("https://lacreisaude.com.br/ajuda/", "_blank")
              }
            >
              <HelpCircle size={24} aria-hidden="true" />
            </HelpButton>

            <LoginIconButton aria-label="Entrar na plataforma">
              <User size={24} aria-hidden="true" />
            </LoginIconButton>
          </MobileButtons>
        </nav>
      </Content>
    </Container>
  );
}

export const Header = memo(HeaderComponent);
