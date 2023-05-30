import React from "react";
import data4 from "../data/Data4";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category4 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"4. 수치값을 반환하는 문자함수"}</div>
      {data4.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category4;
