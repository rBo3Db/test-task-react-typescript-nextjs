import React from 'react';
import Overlay from "./Overlay";
import Button from './Button';
import styled from 'styled-components';

interface IPopupProps {
    apiStatus: string,
    resetPopupState:  (e: React.MouseEvent) => void
}

export default function Popup(props: IPopupProps) {
    return ( 
        <Overlay isShown={!!props.apiStatus}>
            <PopupContent>
                <StatusText>
                    {props.apiStatus==='success' && 'Your payment was successfull'}
                    {props.apiStatus==='error' && 'Your payment can not be comlited. Please go back and try again'}
                </StatusText>
                    <Button onClick={props.resetPopupState}>To main page</Button>
                    {props.apiStatus==='error' && <Button onClick={props.resetPopupState}>Back</Button>}
            </PopupContent>
        </Overlay>
    )
}

const StatusText = styled.h2`
    color: white;
`;
const PopupContent = styled.div`
    max-width: 400px;
    align-items: center;
    padding 15px;
    display: flex;
    flex-direction: column;
    background-color: #222;
    @media (max-width: 414px) {
        align-self: flex-start;
    }
`; 