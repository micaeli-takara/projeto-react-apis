import {
  ArticleDetailPokemon,
  AsideMoves,
  BoxMoves,
  ContainerDetailCard,
  ImagePokebolaDetail,
  ImagemPokemonDetail,
  NamePokemon,
  PId,
  PMoves,
  SectionMovesInfo,
  SectionPokemon,
  SectionStatusPokemon,
  TitleDetail,
  TitleMoves,
} from "./PokemonDetailPageStyle";

function PokemonDetailPage() {
  return (
    <>
      <ContainerDetailCard>
        <TitleDetail>Detalhes</TitleDetail>
        <ArticleDetailPokemon>
          <SectionPokemon>
            <img src="../src/assets/Frente.png" alt="Frente" />
            <img src="../src/assets/Verso.png" alt="Verso" />
          </SectionPokemon>
          <SectionStatusPokemon>
            <img src="../src/assets/Status.png" alt="Status" />
          </SectionStatusPokemon>
          <SectionMovesInfo>
            <PId>#19</PId>
            <NamePokemon>Rattata</NamePokemon>
            <img src="../src/assets/tipo.png" alt="coisinha" />
            <BoxMoves>
            <TitleMoves>Moves:</TitleMoves>
            <AsideMoves>
              <PMoves>Razor Wind</PMoves>
              <PMoves>Sword Dance</PMoves>
              <PMoves>Cut</PMoves>
              <PMoves>Vine Whip</PMoves>
            </AsideMoves>
            </BoxMoves>
          </SectionMovesInfo>
          <div>
            <ImagemPokemonDetail src="../src/assets/Bulbasaur.png" alt="Bulbasaur" />
          </div>
          <ImagePokebolaDetail src="../src/assets/pokebolacarddetalhe.png" alt="pokebolacarddetalhe"/>
        </ArticleDetailPokemon>
      </ContainerDetailCard>
    </>
  );
}

export default PokemonDetailPage;
