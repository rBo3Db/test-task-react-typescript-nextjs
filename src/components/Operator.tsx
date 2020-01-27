import React from 'react';
import Button from './Button';
import Router from 'next/router';
// import { useRouter } from 'next/router';

interface IOperatorProps {
    operator: {
        name: string
    }
}

const Operator = (props: IOperatorProps) => {
    const onClick = (e: React.MouseEvent) => {
    Router.push({
        pathname: '/payPage',
        query: {title: props.operator?.name}},
            `/payPage?title=${props.operator?.name} `
        );
}
    return (
            <Button onClick={onClick}>
                {props.operator?.name}
            </Button>
    )
}
export default Operator;