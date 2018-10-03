import { XML_REQUEST } from "./xmlRequest";
export const REJECTION = {
  GETLINES: () => {
    return XML_REQUEST.WRAPPER(`<GetLines xmlns="http://tempuri.org/"/>`);
  },
  GETAREAS_BY_LINEID: lineId => {
    return XML_REQUEST.WRAPPER(`<GetAreas xmlns="http://tempuri.org/">
                                        <Line_Id>${lineId}</Line_Id>
                                    </GetAreas>`);
  },
  GET_SUPERVISORS: lineId => {
    return XML_REQUEST.WRAPPER(`    <GetSupervisors xmlns="http://tempuri.org/">
                                        <Line_Id>${lineId}</Line_Id>
                                    </GetSupervisors>`);
  },
  GET_POSITIONS: areaId => {
    return XML_REQUEST.WRAPPER(`<GetPositions xmlns="http://tempuri.org/">
                                    <Area_Id>${areaId}</Area_Id>
                                </GetPositions>`);
  },
  GET_SHIFTS: () => {
    return XML_REQUEST.WRAPPER(` <GetShifts xmlns="http://tempuri.org/"/>`);
  },
  GET_REJECTIONS: (lineId, positionId) => {
    return XML_REQUEST.WRAPPER(` <GetRejections xmlns="http://tempuri.org/">
                                    <Line_Id>${lineId}</Line_Id>
                                    <Position_Id>${positionId}</Position_Id>
                                </GetRejections>`);
  },
  ADD_REJECTION: model => {
    return XML_REQUEST.WRAPPER(`<InsertRejectionData xmlns="http://tempuri.org/">
    <line_Id>${model.lineId}</line_Id>
    <supervisor_A>${model.supervisorA}</supervisor_A>
    <supervisor_B>${model.supervisorB}</supervisor_B>
    <supervisor_C>${model.supervisorC ? model.supervisorC : 0}</supervisor_C>
    <Shift>${model.shift}</Shift>
    <time_Slot>${model.timeSlot}</time_Slot>
    <timing_Order>0</timing_Order>
    <Entry_Date>${model.entryDate}</Entry_Date>
    <area_Id>${model.areaId}</area_Id>
    <position_Id>${model.positionId}</position_Id>
    <rejection_Ids>${model.rejectionIds}</rejection_Ids>
    <number_ofRejections>${model.rejectionValue}</number_ofRejections>
</InsertRejectionData>`);
  },
  TODAY_ENTRIES: () => {
    return XML_REQUEST.WRAPPER(` <GetTodayRejections xmlns="http://tempuri.org/"/>`);
  },
};
