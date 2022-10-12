import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
 
} from 'mdb-react-ui-kit';

export default function Card(props) {
    const container={
        marginTop:'5%',
        alignItems:'center'
    }
    const text={
            fontSize:'25px',
            fontWeight:'700'
    }
    return (
    <MDBCard style={container}>
      <MDBCardImage style={{height:'30%',width:'60%'}} src={props.icon} position='top' alt='Weather Image' />
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText style={text}>
        {props.temp} {'\u00b0'}C<br/>{props.desc}
        </MDBCardText>
        <MDBBtn></MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}