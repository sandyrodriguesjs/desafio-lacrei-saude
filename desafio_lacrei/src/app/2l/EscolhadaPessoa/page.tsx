"use client";
import Image from "next/image";

import {
  BackgroundWrapper,
  MainContainer,
  Title,
  Description,
  ButtonsRow,
  SolidButton,
  OutlineButton
} from "./styles";

export default function EscolhaDaPessoaPage() {
  return (
    <>
      <BackgroundWrapper>
        <MainContainer>
          <Title>
            Junte-se à <br />
            nossa comunidade
          </Title>

          <Description>
            Encontre atendimento clínico de qualidade ou entre para o time de
            profissionais da Lacrei Saúde.
          </Description>

          <ButtonsRow>
            <SolidButton>Buscar atendimento</SolidButton>
            <OutlineButton>Oferecer atendimento</OutlineButton>
          </ButtonsRow>
        </MainContainer>

        <Image
          src="/EscolhaDaPessoa.svg"
          alt="Profissionais de saúde"
          width={480}
          height={600}
          style={{ objectFit: "cover" }}
        />
      </BackgroundWrapper>
    </>
  );
}
