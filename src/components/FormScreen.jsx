import React from 'react'
import styled from 'styled-components';
import { useForm } from '../hooks/useForm';
import { ElementCard } from './ElementCard';
import elementsData from '../data/PeriodicTableJSON.json';


export const FormScreen = () => {
	
	const [ formValues, handleInputChange ] = useForm({
		elementName: '',
	})

	const {  elementName } = formValues;

	return (
	    <Container>
	      <FormTag onSubmit={(e) => e.preventDefault()}>
				<MainTitle>Put the chemical element you want to search</MainTitle>
				
				<InputDiv>
					<SubTitle>Name: </SubTitle>
			  		<CustomInput 
						type="text"  
						name='elementName'
						value={elementName}
						onChange={handleInputChange}	
					/>
				</InputDiv>

			  <SubmitDiv>
	     	   	<SubmitInput type="submit" value="Submit" />
			  </SubmitDiv>

	      </FormTag>

			<div style={{width: '50%'}}>
				
				<RightSideContainer>

					{
						elementsData.elements.map(element => {

						if ( element.name.toLocaleLowerCase() === elementName.toLocaleLowerCase() ) {
								
							return(
								<ElementCard { ...element } key={element.name} />
							)


						}else return;


						})

					}

				</RightSideContainer>

			</div>
 	   </Container>
	);
}

const Container = styled.div`
	display: flex;
	flex: 1;
	margin: 200px 200px;
	flex-direction: row;
`;

const FormTag = styled.form`
	width: 50%;
`;

const InputDiv = styled.div`
	width: 100%;
`;

const MainTitle = styled.h1`
	margin-bottom: 80px;
	font-weight: normal;
`;

const SubTitle = styled.h2`
	font-weight: normal;
	margin: 60px 0px;
`;

const CustomInput = styled.input`
	width: 80%;
	padding: 25px;
	border: none;
	border-radius: 20px;
	background-color: #EAEAEA;
	font-size: 18px;

	&:focus{
		outline: none;
	}
`;

const SubmitDiv = styled.div`
	margin: 0px;
	margin-top: 60px;
	width: 90%;
	display: flex;
	justify-content: center;
`;

const SubmitInput = styled.input`
	width: 40%;
	padding: 15px;
	font-size: 22px;
	border-radius: 20px;
	border: none;
	background-color: #3CD4B0;
	color: white;

	&:hover{
		cursor: pointer;
		background-color: #30C8A4;
	}
`;

const RightSideContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
