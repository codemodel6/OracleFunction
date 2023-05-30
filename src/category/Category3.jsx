import React from "react";
import data3 from "../data/Data3";
import { ContentsWrapper } from "./CategoryStyle";
import CategoryContents from "./CategoryContents";

const Category3 = () => {
  return (
    <ContentsWrapper>
      <div className="title">{"3. NLS 문자 함수"}</div>
      {data3.map((it, idx) => (
        <CategoryContents it={it} idx={idx} />
      ))}
    </ContentsWrapper>
  );
};

export default Category3;
