import React, { useCallback, useEffect, useState } from "react";
import {
  Message,
  Token,
  TokenType,
} from "../../modules/thelanguage/src/common";
import parse from "../../modules/thelanguage/src/parser";
import transpile from "../../modules/thelanguage/src/transpiler";
export default React.memo(TheLanguageSegment);

function TheLanguageSegment(): JSX.Element {
  const [src, setSrc] = useState(`تابع مرحبا (اسم)
  اطبع "مرحبا" + اسم
انتهى

مرحبا ("صلاح")
`);

  const get = useCallback((src: string) => {
    try {
      return transpile(parse(src).tokens, src).src.join("\n");
    } catch (e) {
      return "error :(";
    }
  }, []);

  return (
    <div id="thelanguage" className="flex flex-col p-12 gap-8">
      <h1
        className="text-gray-100"
        onClick={() => window.open("https://github.com/Rainboi64/TheLanguage")}
      >
        The Language
      </h1>
      <div className="flex">
        <div className="flex flex-1 flex-row-reverse gap-8">
          <div className="flex flex-1 w-full gap-2 justify-end">
            <h1 className="text-gray-100 text-right">fullstack</h1>
            <h1 className="droid-arabic-kufi text-gray-100 text-right">
              أكتب.. بالعربي
            </h1>
          </div>
          <div className="flex-1">
            <h2 className="droid-arabic-kufi text-gray-100">
              اللغة هي لغة برمجة حديثة متعددة الأستخدامات, يسعى فريق اللغة
              لتعزيز دور اللغة العربية في المجال التقني. قمنا ببناء اللغة بعد
              البحث في كتب الريضيات والمنطق العربية القديمة لأمثال الخوارزمي
              وغيرهم.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-row-reverse gap-8 items-center">
        <textarea
          value={src}
          onChange={(e) => {
            setSrc(e.target.value);
          }}
          dir="rtl"
          className="droid-arabic-kufi flex-1 text-gray-100 bg-teal-700 rounded-xl p-2 h-full"
        />
        <svg
          className="fill-gray-100"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
        <textarea
          readOnly
          className="droid-arabic-kufi flex-1 text-gray-100 bg-orange-700 rounded-xl p-2 text-right h-full"
        >
          {get(src)}
        </textarea>
      </div>
    </div>
  );
}
