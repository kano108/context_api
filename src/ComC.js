import React from "react";
import { FirstName, LastName } from "./App";

function ComC() {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <>
                    <h1>Create The Context Api First Way</h1>
                    <h2>My Name is {fname} {lname}</h2>
                  </>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default ComC;
