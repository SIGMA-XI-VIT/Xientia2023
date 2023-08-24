import React from "react";
import "../styles/rules.scss";

const Rules = (props) => {
  return (
    <div className="rules">
      <div className="rulesbox">
        <div className="rulesTitle">
          <h1 id="rulesTitle">GUIDELINES</h1>
        </div>

        <div className="mainrules">
          <ol>
            <li className="text" id="one">
              - Your innovation should focus towards providing novel solutions to
              any ONE of the key{" "}
              <a className="link" href="https://sdgs.un.org/goals" target="none">
                SDG
              </a>{" "}
              areas floated for the competition.
            </li>
            <li className="text">
              - A team of up to four students from any year and department of any university can participate.
            </li>
            <li className="text">
              - A certificate of participation will be given to all those
              participants who submit their ideas within the timeline.
              Submissions start from 18th September 2023 and end on 20th September
              2023 at 12:00 AM.
            </li>
            <li className="text">
              - Team members are required to upload their project in .pptx format
              (around 20 slides) to a shared drive link accessible for all. It
              must contain the SDG theme chosen, name of project/idea, name of
              team and names of team members.
            </li>
            <li className="text">
              - Projects will be shortlisted from all submissions and evaluated by
              the judges of Xientia.
            </li>
            <li className="text6">
              - The top three will be selected as the winners, with the following
              prize distribution:
              <ol className="a">
                <li>
                  1st Prize: <span>Rs. 7000</span>
                </li>
                <li>
                  2nd Prize: <span>Rs. 5000</span>
                </li>
                <li>
                  3rd Prize: <span>Rs. 2000</span>
                </li>
              </ol>
              - For teams of up to four people, the cash prize will be deposited
              in the bank account of the team leader.
            </li>
            <li className="text" id="seven">
              - The announcement of the winners shall be made during Xientia on 22
              September 2023.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Rules;
