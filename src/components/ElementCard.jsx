import React from "react";
import styled from "styled-components";

export const ElementCard = ({ atomic_mass, number, symbol, electron_configuration }) => {
  return (
    <ElementContainer>
      <AtomicMass>{ atomic_mass }</AtomicMass>
      <Number>{ number }</Number>
      <Symbol>{ symbol }</Symbol>
      <ElectroNegativityNumber>
        <ul>
          <li>+1</li>
          <li>+1</li>
          <li>+1</li>
          <li>+1</li>
        </ul>
      </ElectroNegativityNumber>
      <ElectronicConfiguration>{ electron_configuration }</ElectronicConfiguration>
    </ElementContainer>
  );
};


const ElementContainer = styled.div`
	width: 450px;
	height: 350px;
	background-color: white;
	border: 2px solid black;
	border-radius: 30px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-template-areas: 
	"AtomicMass Number"
	"Symbol ElectroNegativityNumber"
	"ElectronicConfiguration ."	
	;
	align-items: center;
`;

const Symbol = styled.h4`
	font-size: 110px;
	font-weight: 500;
	display: flex;
	justify-content: center;
`;

const AtomicMass = styled.h4`
	display: flex;
	justify-content: center;
	font-size: 30px;
	font-weight: normal;
`;

const Number = styled.h4`
	display: flex;
	justify-content: flex-end;
	margin-right: 50px;
	font-size: 60px;
	font-weight: normal;
`;

const ElectroNegativityNumber = styled.h4`
	display: flex;
	justify-content: flex-end;
	margin-right: 50px;

	ul{
		list-style: none;

		li{
			margin: 10px 0px;
			font-size: 20px;
			font-weight: normal;
		}
	}
`;

const ElectronicConfiguration = styled.h4`
	display: flex;
	justify-content: center;

	font-size: 25px;
	font-weight: normal;
`;