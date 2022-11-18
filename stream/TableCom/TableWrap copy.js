import React, { Component, Fragment } from "react";
import { fromJS } from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";

@immutableRenderDecorator
export default class TableWrap extends Component {
    render() {
        const { repInfo } = this.props;
        // const reportName = repInfo.get("reportName");
        // const titleRow = repInfo.get("titleRow"); //标题
        const rowName = repInfo.getIn(["titleRow", "rowName"]) || ""; //标题
        const areaList = repInfo.getIn(["titleRow", "areaList"]) || fromJS([]);
        const rowList = repInfo.get("rowList") || fromJS([]);

        return (
            <div className="repdef-wrap">
                <div className="repdef-table">
                    {/* 表头标题 titleRow*/}

                    <div className="rept-tit-con">
                        {/* 行维度名称 */}
                        <div className="rept-row">{rowName}</div>

                        {/* 度量域 */}
                        <div className="rept-area-col-con">
                            {!!areaList.size &&
                                areaList.map((areaVal, areaIdx) => {
                                    const areaName = areaVal.get("areaName");
                                    const colList = areaVal.get("colList");

                                    return (
                                        <div className="rept-area-col-item" key={`${areaIdx}_area`}>
                                            {/* 度量域名称 */}
                                            <div className="rept-area"> {areaName} </div>

                                            {/* 指标名称 */}
                                            <div className="rept-col">
                                                {
                                                    colList.size ?
                                                        colList.map((colVal, colIdx) => {
                                                            const colName = colVal.get("colName")
                                                            return (
                                                                <div className="rept-col-name" key={`${areaIdx}_area_${colIdx}`}>{colName}</div>
                                                            )
                                                        })
                                                        : null
                                                }
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    {/* table区域  rowList */}

                    <div className="rept-table-con">
                        {
                            !!rowList.size && rowList.map((rowVal, rowIdx) => {
                                const rowNameItem = rowVal.get("rowName")
                                const cellList = rowVal.get("cellList")

                                return (
                                    <div className="rept-table-item" key={`${rowIdx}_tabItem`}>
                                        {/* 行名称 */}
                                        <div className="rept-row">{rowNameItem}</div>

                                        <div className="rept-area-col-item">
                                            {/* 度量域名称 */}
                                            {/* <span className="rept-area"></span> */}

                                            {/* 指标名称 */}
                                            <div className="rept-col">
                                                {
                                                    (cellList || []).map((cellVal, cellIdx) => {
                                                        const amount = cellVal.get("amount") || ''

                                                        return (
                                                            <div className="rept-col-name"
                                                                key={`${rowIdx}_tabItem${cellIdx}`}
                                                            >
                                                                {amount}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );

                            })}
                    </div>
                </div>
            </div>
        );
    }
}

{
    // !!rowList.size && rowList.map((rowVal, rowIdx) => {
    //     const rowNameItem = rowVal.get("rowName")
    //     const cellList = rowVal.get("cellList")
    //     return (
    //         <div className="rept-tit-con">
    //             <div className="rept-row">{rowNameItem}</div>
    //             <div className="rept-area-col-con">
    //                 {/* 度量域 */}
    //                 {
    //                     cellList.map((cellVal, cellIdx) => {
    //                         const amount = cellVal.get("amount")

    //                         return (
    //                             <div className="rept-area-col-item">
    //                                 {/* 指标 */}
    //                                 <div className="rept-col">
    //                                     <div className="rept-col-name">{amount}</div>
    //                                     <div className="rept-col-name">{amount}</div>
    //                                 </div>
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>

    //         </div>
    //     )
    // })
}