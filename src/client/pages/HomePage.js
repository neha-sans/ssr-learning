import React from "react";

function Home() {
  return (
    <div>
      <div>I am a nice home Component</div>
      <button onClick={() => console.log("Clicked")}>Click me</button>
    </div>
  );
}
export default {
  component: Home,
};
