"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button/Button";

import {
  BackgroundWrapper,
  MainContainer,
  Title,
  Description,
  ButtonsRow,
} from "./styles";

export default function EscolhaDaPessoaPage() {
  return (
    <BackgroundWrapper as="section" aria-labelledby="escolha-title">
      <MainContainer>

        <Title id="escolha-title">
          Junte-se à nossa comunidade
        </Title>

     
        <Description>
          Encontre atendimento clínico de qualidade ou entre para o time de
          profissionais da Lacrei Saúde.
        </Description>

        <nav aria-label="Escolha do tipo de usuário">
          <ButtonsRow>
            <Link
              href="https://paciente.lacreisaude.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="solid"
                aria-label="Buscar atendimento clínico como paciente"
              >
                Buscar atendimento
              </Button>
            </Link>

            <Link
              href="https://paciente.lacreisaude.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                aria-label="Oferecer atendimento como profissional de saúde"
              >
                Oferecer atendimento
              </Button>
            </Link>
          </ButtonsRow>
        </nav>
      </MainContainer>

     
      <figure aria-hidden="true">
        <Image
          src="/Escolha-da-Pessoa.webp"
          alt="Profissionais de saúde"
          width={480}
          height={600}
          sizes="(max-width: 900px) 100vw, 480px"
          placeholder="blur"
          blurDataURL="/Escolha-da-Pessoa-blur.webp"
          loading="lazy"
          quality={70}
          style={{
            objectFit: "cover",
            display: "block",
          }}
        />
      </figure>
    </BackgroundWrapper>
  );
}
