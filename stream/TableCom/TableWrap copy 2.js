import React, { Component, Fragment } from "react";
import { fromJS } from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { Tooltip } from 'antd';


// import { CreatTableTitle, CreatTableItem } from './common/CreatReportDom.js'

@immutableRenderDecorator
export default class TableWrap extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         widthName: '100px'
    //     }
    // }
    // componentDidUpdate() {
    //     if (this.refs['reptRow']) {
    //         let el = this.refs['reptRow']
    //         const _width = el?.offsetWidth || '100px'
    //         this.setState({ widthName: _width })

    //         console.log(el.offsetWidth, 'el--el')
    //     }
    // }
    render() {
        const { repInfo } = this.props;
        // const reportName = repInfo.get("reportName");
        // const titleRow = repInfo.get("titleRow"); //标题
        const rowName = repInfo.getIn(["titleRow", "rowName"]) || ""; //标题
        const areaList = repInfo.getIn(["titleRow", "areaList"]) || fromJS([]);
        const rowList = repInfo.get("rowList") || fromJS([]);

        const showRowIndex = repInfo.get("showRowIndex") || false
        const showAssCode = repInfo.get("showAssCode") || false
        const layoutNumber = repInfo.get("layoutNumber") || 1
        const rowList2 = repInfo.get("rowList2") || []
        //获取的一个的长度
        const groupLength = areaList.map(w => w.get('colList').size)

        return (
            <div className="repdef-wrap">
                <div className="repdef-table">
                    {/* 表头标题 titleRow*/}

                    <div className="rept-tit-con">
                        {/* 行维度名称 */}
                        <div className="rept-row">{rowName}</div>
                        {showRowIndex ? <div className="rept-row-idx">行次</div> : null}
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
                                                                <div className="rept-col-name" key={`${areaIdx}_area_${colIdx}`}>
                                                                    {/* {colName} */}
                                                                    <Tooltip title={colName}>
                                                                        {colName}
                                                                    </Tooltip>
                                                                </div>
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
                    {
                        <div className="rept-tab-con">
                            {
                                !!rowList.size && rowList.map((rowVal, rowIdx) => {
                                    const cellList = rowVal.get("cellList")?.toJS().map(w => w) //当前度量域的列
                                    let colList = []
                                    groupLength.map(length => {
                                        const list = cellList.splice(0, length)
                                        colList = colList.concat([list])
                                    })

                                    let colList2 = []
                                    if (layoutNumber === 2) {
                                        let cellList2 = rowList2[rowIdx].cellList.map(w => w)
                                        colList2 = groupLength.map(length => {
                                            return cellList2.splice(0, length)
                                        })
                                    }
                                    return (
                                        <div className="rept-tab-item" key={`${rowIdx}_tabItem`}>
                                            {/* 行名称  相当于 度量域名称*/}
                                            <div className="rept-row">{rowVal.get("rowName")}</div>
                                            {showRowIndex ? <div className="rept-row-idx">{rowVal.get("rowIndex")}</div> : null}

                                            {/* <div className="rept-area-col-item"> */}
                                            <div className="rept-area-col-con" key={`${rowIdx}colList`}>

                                                {
                                                    (colList || []).map((list, i) => {
                                                        return (
                                                            <div className="rept-area-col-item" key={`${rowIdx}_${i}_area`}>
                                                                {/* <div className="rept-area"></div> */}
                                                                <div className="rept-col">
                                                                    {
                                                                        list.map((w, j) => {
                                                                            return (

                                                                                <div className="rept-col-name" key={`${rowIdx}_${i}_${j}col`} >
                                                                                    {/* {w.amount === 0 ? '' : w.amount} */}
                                                                                    <Tooltip title={w.amount === 0 ? '' : w.amount}>
                                                                                        {w.amount === 0 ? '' : w.amount}
                                                                                    </Tooltip>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                                {/* 指标名称 */}
                                                {/* <div className="rept-col">
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
                                                </div> */}
                                            </div>
                                        </div>
                                    );

                                })
                            }
                        </div>
                    }

                    {/* <div className="rept-table-con"> */}

                    {
                        // !!rowList.size && rowList.map((rowVal, rowIdx) => {
                        //     const rowNameItem = rowVal.get("rowName")
                        //     const cellList = rowVal.get("cellList")

                        //     return (
                        //         <div className="rept-table-item" key={`${rowIdx}_tabItem`}>
                        //             {/* 行名称 */}
                        //             <div className="rept-row">{rowNameItem}</div>

                        //             <div className="rept-area-col-item">
                        //                 {/* 度量域名称 */}
                        //                 {/* <span className="rept-area"></span> */}

                        //                 {/* 指标名称 */}
                        //                 <div className="rept-col">
                        //                     {
                        //                         (cellList || []).map((cellVal, cellIdx) => {
                        //                             const amount = cellVal.get("amount") || ''

                        //                             return (
                        //                                 <div className="rept-col-name"
                        //                                     key={`${rowIdx}_tabItem${cellIdx}`}
                        //                                 >
                        //                                     {amount}
                        //                                 </div>
                        //                             )
                        //                         })
                        //                     }
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     );

                        // })
                    }
                    {/* </div> */}
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