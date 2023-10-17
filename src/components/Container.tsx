import React from "react";
import Header from "./Header";
import Question from "./Question";
import DisclaimerQ from "./DisclaimerQ";
import question from "../utils/question.json";
import Answer from "./Answer";
const Container = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Header header={question.header} />
      <Question question={question.questions[0].title} />
      <DisclaimerQ description={question.questions[0].description} />
      <Answer options={question.questions[0].options} />
    </div>
  );
};

export default Container;
