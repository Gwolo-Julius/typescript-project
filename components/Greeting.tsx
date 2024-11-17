import React, { FC } from "react";

// Step 1: Define the props interface
interface GreetingProps {
  name: string; // 'name' must be a string
}

// Step 2: Use the FC type for the functional component and type the props
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
