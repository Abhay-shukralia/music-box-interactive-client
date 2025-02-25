import { connect } from "react-redux";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import FlowPanel from "../components/Plots/FlowPanel";
import FlowGraph from "../components/Plots/FlowGraph";
import { getRunStatus } from "../redux/selectors";
import { RunStatus } from "../controllers/models";

function D3Flow(props) {
  return (
    <Layout>
      <main role="main" style={{ padding: `1em`, height: `100%` }}>
        {props.runStatus === RunStatus.DONE ? (
          <Container fluid style={{ maxWidth: `3000px`, height: `100%` }}>
            <Row style={{ height: `100%` }}>
              <Col xs={4} md={3} lg={3} style={{ height: `100%` }}>
                <FlowPanel />
              </Col>
              <Col>
                <div style={{ height: `100%` }}>
                  <FlowGraph />
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <p>
            {" "}
            The flow diagram will be available once a model run has been
            completed.{" "}
          </p>
        )}
      </main>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    runStatus: getRunStatus(state),
  };
};

export default connect(mapStateToProps)(D3Flow);
