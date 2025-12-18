"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import {
  BackgroundWrapper,
  MainContainer,
  Title,
  Description,
  ButtonsRow,
} from "./styles";

const ButtonSkeleton = () => (
  <div
    aria-hidden
    style={{
      padding: "12px 32px",
      borderRadius: "8px",
      background: "#f0f0f0",
      border: "none",
      minWidth: "200px",
      minHeight: "48px",
    }}
  />
);


const Button = dynamic(() => import("@components/Button/Button"), {
  ssr: true,
  loading: () => <ButtonSkeleton />,
});

export default function Home() {
  return (
    <BackgroundWrapper>
      <MainContainer>
      
        <Title>Olá, você está na Lacrei Saúde!</Title>

       
        <Description>
          Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais de
          saúde qualificados, proporcionando experiências de cuidado seguras e
          inclusivas.
        </Description>

        
        <nav aria-label="Ações principais">
          <ButtonsRow>
            <Link href="/2l/EscolhaDaPessoa">
              <Button
                variant="solid"
                aria-label="Ir para a página de escolha para pacientes"
              >
                Para pacientes
              </Button>
            </Link>

            <Link href="/2l/EscolhaDaPessoa">
              <Button
                variant="solid"
                aria-label="Ir para a página de escolha para profissionais"
              >
                Para profissionais
              </Button>
            </Link>
          </ButtonsRow>
        </nav>
      </MainContainer>
    </BackgroundWrapper>
  );
}
