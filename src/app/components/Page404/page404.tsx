import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Page404: React.SFC = () => {
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oups! Vous êtes perdu.</h4>
              <p className="text-muted float-left">La page que vous cherchez n'éxiste pas.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Page404 };
