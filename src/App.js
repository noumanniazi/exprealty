import React from "react";

import { content1, content2, content3 } from "./data";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Content from "./components/Content";
import Video from "./components/Video";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Content id="exploreus" heading={content1.heading} paragraphs={content1.paragraphs} />
      <Video url="https://www.youtube.com/embed/p54pHtlG4xs"/>
      <Content heading={content2.heading} paragraphs={content2.paragraphs} getAccess={{URL: "https://raymondkerege.exprealty.careers/", text: "Click Here to Get Access Now!"}} />
      <Video url="https://www.youtube.com/embed/tEAj--jFJUk"/>
      <Content heading={content3.heading} paragraphs={content3.paragraphs} />
      <Video className="space" url="https://www.youtube.com/embed/5VF5wLyuv2g"/>

      <Footer />
    </div>
  );
}

export default App;
