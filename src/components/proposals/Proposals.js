import React, { Fragment } from "react";
import { BottomBar } from "./BottomBar";
import { Proposal } from "./Proposal";

export const Proposals = () => (
  <Fragment>
    <Proposal voteCount="279">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus
      beatae cum quod delectus neque!
    </Proposal>
    <Proposal voteCount="279">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus
      beatae cum quod delectus neque!
    </Proposal>
    <Proposal voteCount="279">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam possimus
      beatae cum quod delectus neque!
    </Proposal>
    <BottomBar />
  </Fragment>
);
