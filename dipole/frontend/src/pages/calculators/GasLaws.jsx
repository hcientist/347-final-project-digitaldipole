import React from "react";
import { useState, useEffect } from "react";

import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { GenInfo1, GenInfo2 } from "../../components/CalcInfo";
import {
  AvoInfo,
  AmontonInfo,
  BoyleInfo,
  CharlesInfo,
  CombinedInfo,
  IdealInfo,
} from "../../components/CalcInfo";

import { all } from '@awesome.me/kit-a655910996/icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../App.css";
import "../../styles/refs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/bootstrap.min-dipole.css";

library.add(...all)

function test(Ac1, Ac2, act1 = "Info", act2 = "Calculator") {
  return (
    <>
      <Accordion defaultActiveKey="0" className="ml-auto mr-auto mb-3 calc-acc">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <FontAwesomeIcon icon="fa-duotone fa-circle-info" size="lg" style={{"--fa-secondary-color": "#51D4FF", "--fa-primary-color": "#533856",}} className="pr-2" />{act1}
          </Accordion.Header>
          <Accordion.Body>
            <Ac1 />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{act2}</Accordion.Header>
          <Accordion.Body>
            <Ac2 />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

// MATT - useEffect with no dependencies?
const CalcCard = () => {
  function handleClick(event) {
    const fetchFrame = async (key) => {
      console.log(key)
      console.log(`/api/calculators/${key}`);

      const response = await fetch(`/api/calculators/${key}`);
      const rJson = await response.json();
      console.log(rJson);
    }
    console.log(event);
    window.MathJax.typesetClear();
    event !== "genInfo" && fetchFrame(event);
    window.MathJax.typeset();
  }

  return (
    <div className="landing-container mt-3">
      <div className="landing mt-0">
        <Card className="mt-5 m-auto gl-calc" id="ref-default">
          <Tabs
            onSelect={(e) => handleClick(e)}
            defaultActiveKey="info"
            id="uncontrolled-tab-example"
            className="mb-3 mt-1 calc-tabs"
          >
            <Tab eventKey="info" className="calc-tab" title="Info">
              {test(GenInfo1, GenInfo2, "Gas Laws", "Ideal Gases")}
            </Tab>
            <Tab eventKey="avgdr" className="calc-tab" title="Avogadro's Law">
              {test(AvoInfo, AvoInfo)}
            </Tab>
            <Tab eventKey="amntn" className="calc-tab" title="Amonton's Law">
              {test(AmontonInfo, AmontonInfo)}
            </Tab>
            <Tab eventKey="boyle" className="calc-tab" title="Boyle's Law">
              {test(BoyleInfo, BoyleInfo)}
            </Tab>
            <Tab eventKey="chrls" className="calc-tab" title="Charles' Law">
              {test(CharlesInfo, CharlesInfo)}
            </Tab>
            <Tab
              eventKey="cmbnd"
              className="calc-tab"
              title="Combined Gas Law"
            >
              {test(CombinedInfo, CombinedInfo)}
            </Tab>
            <Tab eventKey="ideal" className="calc-tab" title="Ideal Gas Law">
              {test(IdealInfo, IdealInfo)}
            </Tab>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default CalcCard;