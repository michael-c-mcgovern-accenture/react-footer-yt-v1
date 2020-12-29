import React from 'react';
import {Container, Wrapper, MobileView, Row, Column, Link, Title, Base} from './styles/footer';

export default function Footer({children, ... restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.MobileView = function FooterMobileView({children, ...restProps}) {
    return <MobileView {...restProps}>{children}</MobileView>
}

Footer.Row = function FooterRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Footer.Base = function FooterBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>
}