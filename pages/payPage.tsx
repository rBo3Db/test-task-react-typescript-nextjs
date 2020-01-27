import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import Loader from '../src/components/Loader';
import Popup from '../src/components/Popup';
import Button from '../src/components/Button';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import GlobalStyle from '../src/theme/globalStyle';

export default function PayPage() {
    React.useState();
    const router = useRouter();

    const [isLoaderShow, setLoaderShow] = useState(false);
    const [apiStatus, setApiStatus] = useState('');

    const queryTitle = router.query.title;
    
    useEffect(() => {
        if (!queryTitle) {
            routerPushHome();
        }
    },[queryTitle]);

    const changeLoaderState = (newIsShownState: boolean) => {
        setLoaderShow(newIsShownState);
    }
    const changePopupState = (newApiStatus: string) => {
        setApiStatus(newApiStatus);
    }
    const resetPopupState = () => {
        changePopupState('');
        routerPushHome();
    }

    const routerPushHome = () => {
        router.push('/');
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const responseTime: number = Math.round(Math.random() * 5) * 1000;
        changeLoaderState(true);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.round(Math.random()) ? resolve() : reject(new Error())
            }, responseTime)
        })
        .then(
            result => {
                changeLoaderState(false);
                changePopupState('success');
            },
            error => {
                changeLoaderState(false);
                changePopupState('error');
            }
        );
    }

    return (
        <PayForm>
            <GlobalStyle />
            <Loader isShown = {isLoaderShow}/>
            <Popup
                apiStatus = {apiStatus}
                resetPopupState={resetPopupState}    
            />
            <Header>
                Pay for {queryTitle} 
            </Header>
            <form onSubmit={handleSubmit}>
                <p>Please enter phone number</p>
                <InputMask
                    id="phoneNumber"
                    type="tel"
                    placeholder="Phone number" 
                    name="phone"
                    pattern="^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$"
                    title="+7 (999) 999 99 99"
                    mask="+7 (999) 999 99 99"
                    required
                />
                <p>Please enter payment amount</p>
                <InputMask
                    id="paymentAmount"
                    type="num"
                    placeholder="Payment amount" 
                    name="money"
                    pattern="^\d{1,3}$|^1000$"
                    title="from 1 to 1000"
                    mask="9999"
                    maskChar=""
                    required
                />
                <Button type="submit">Continue</Button>
            </form>
        </PayForm>
    )
};

const PayForm = styled.div`
    background-color: white;
    border: 2px solid black;
    padding: 15px;
    border-radius: 3px;
    display: flex;
    align-content: center;
    flex-direction: column;

`;
const Header = styled.h1`
    align-self: center;
    color: palevioletred;
`;