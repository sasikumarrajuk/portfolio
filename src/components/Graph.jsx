import React from "react";
import GitHubCalendar from "react-github-calendar";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const Graph = () => {
  return (
    <div>
      <Col lg="12">
        <Fade bottom duration={1000} distance="40px">
          <Card className="shadow-lg--hover shadow mt-4">
            <CardBody>
              <div className="d-flex px-3">
                <div className="pl-4">
              <GitHubCalendar username="prasadbobby" />
                  
                </div>
              </div>

            </CardBody>
          </Card>
        </Fade>
      </Col>
    </div>
  );
};

export default Graph;
