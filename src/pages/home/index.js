import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Wapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Container,
} from "./styles";
import Suggestions from "../../components/Suggestions";

export default function Home() {
  return (
    <Wapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <MaterialCommunityIcons name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
      </Container>
    </Wapper>
  );
}
