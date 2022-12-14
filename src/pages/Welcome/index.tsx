import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pokemon.json'
import { Button } from '../../components/Button';





import * as S from './styles';



export function Welcome() {
    return <S.Container>
        <S.Content>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
        </S.Content>
        <S.Footer>
            <S.Title>Bem Vindo</S.Title>
            <S.SubTitle>Veja todos os pokemons!</S.SubTitle>
            <Button  title='Iniciar'/>
        </S.Footer>
    </S.Container>
}