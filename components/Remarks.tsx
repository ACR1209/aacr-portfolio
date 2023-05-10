import { firaCodeFont } from "@/utils/fonts";
import React, {useContext} from "react";
import Remark from "./Remark";
import { LocaleContext } from "@/pages";
import { Remark as RemarkType, Translation } from "@/utils/translation";


function Remarks() {
  const {translation} = useContext(LocaleContext)
  const remarks: RemarkType[] = translation?.remarks_content!
  
  return (
    <section
      id="remarks"
      className={`${firaCodeFont.className} text-white bg-black p-5`}
    >
      <h2 className="text-5xl text-right  lg:text-8xl uppercase font-bold ">
        {translation?.remarks_title }
      </h2>
      <div>
        {remarks?.map((r, i) => (
          <Remark key={`r-{i}`} {...r} />
        ))}
      </div>
    </section>
  );
}

export default Remarks;
