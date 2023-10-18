import React from "react";
import Header from "../Header";
import Question from "../Question";
import DisclaimerQ from "../DisclaimerQ";
import question from "../../utils/question.json";
import Answer from "../Answer";
import Buttons from "../Buttons";
const Container = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center gap-4">
        <Header header={question.header} />
        <div className="flex flex-col gap-4 border-b-2 pb-4">
          <Question question={question.questions[0].title} />
          <DisclaimerQ description={question.questions[0].description} />
        </div>
      </div>
      <Answer options={question.questions[0].options} />
      <Buttons />
    </div>
  );
};

export default Container;
