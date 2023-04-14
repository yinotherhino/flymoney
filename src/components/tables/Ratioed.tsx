import React from "react";
import { FcOpenedFolder } from "react-icons/fc";

interface ITableData {
  thead: Array<string | JSX.Element>;
  theadRatio?: number[];
  tdata: Array<Array<string | number | JSX.Element>>;
  tbodyStyles?: string[] | string;
  tableStyles?: string;
  theadStyle?: string;
}

const RatioedTable = ({ thead, tdata, tbodyStyles, theadRatio, tableStyles }: ITableData) => {
  if(!theadRatio) theadRatio = Array(thead.length).fill(100 / thead.length);

  return (
    <table className={`w-full ${tableStyles}`}>
      <colgroup>
        {thead.map((el, index) => {
          return <col key={index} width={`${theadRatio![index]}%`} />;
        })}
      </colgroup>
      <tbody>
        <tr className={`border-b border-gray-300`}>
          {thead.map((el, index) => {
            return (
              <td key={index} className="py-2 font-sm ">
                {el}
              </td>
            );
          })}
        </tr>
        {tdata.map((el, index) => {
          return (
            <tr key={index} className={`border-b border-gray-300`}>
              {el.map((em, index) => {
                return (
                  <td key={index} className="pt-2 font-sm tdStyle ">
                    <p
                      className={
                        Array.isArray(tbodyStyles)
                          ? tbodyStyles[index]
                          : tbodyStyles || ""
                      }
                    >
                      {em}
                    </p>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RatioedTable;
