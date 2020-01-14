import React from 'react';
import { Button } from './Button';
import Router from 'next/router';

interface IOperatorProps {
    operator: {
        name: string
    }
}

export const Operator = (props: IOperatorProps) => {
    const onClick = (e: React.MouseEvent) => {
    Router.push(`/payPage?title=${props.operator.name}`);
}
    return (
            <Button onClick={onClick}>
                {props.operator.name}
            </Button>
    )
}
