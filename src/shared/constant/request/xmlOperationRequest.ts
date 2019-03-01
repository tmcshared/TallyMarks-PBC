import { XML_REQUEST } from "./xmlRequest";
export const OPERATION = {
  LINENUMBER: () => {
    return XML_REQUEST.WRAPPER(`<GetAllLines xmlns="http://tempuri.org/"/>`);
  },
  SUPERVISOR_BY_LINENUMBER: lineId => {
    return XML_REQUEST.WRAPPER(` <GetSupervisorsByLine xmlns="http://tempuri.org/">
                                    <lineID>${lineId}</lineID>
                                  </GetSupervisorsByLine>`);
  },

  ALLBRAND: () => {
    return XML_REQUEST.WRAPPER(`<GetAllBrands xmlns="http://tempuri.org/"/>`);
  },
  ALLSHIFT: () => {
    return XML_REQUEST.WRAPPER(` <GetAllShifts xmlns="http://tempuri.org/"/>`);
  },
  ALLPACKAGES: () => {
    return XML_REQUEST.WRAPPER(
      `  <GetAllPackages xmlns="http://tempuri.org/"/>`
    );
  },
  LINESPEED_BY_LINE_PACKAGE: (lineId, packageId) => {
    return XML_REQUEST.WRAPPER(`<GetPlanSpeedByLineAndPackage xmlns="http://tempuri.org/">
                                    <lineID>${lineId}</lineID>
                                    <packageID>${packageId}</packageID>
                                </GetPlanSpeedByLineAndPackage>`);
  },
  PROBLEM_BY_LINE: lineId => {
    return XML_REQUEST.WRAPPER(`  <GetProblemsByLine xmlns="http://tempuri.org/">
                                      <lineID>${lineId}</lineID>
                                  </GetProblemsByLine>`);
  },
  ADD_PRODUCTION: model => {
    return XML_REQUEST.WRAPPER(`<InsertRecord xmlns="http://tempuri.org/">
    <lineID>${model.lineId}</lineID>
    <supervisorID>${model.supervisorId}</supervisorID>
    <shift>${model.shift}</shift>
    <timeSlot>${model.timeSlot}</timeSlot>
    <timingsOrder>${model.timingsOrder}</timingsOrder>
    <brandID>${model.brandId}</brandID>
    <packageID>${model.packageId}</packageID>
    <hourlyProduction>${model.hourlyPrd}</hourlyProduction>
    <entryDate>${model.entryDate}</entryDate>
    <lineSpeed>${model.lineSpeed}</lineSpeed>
    <planProduction>${model.planPrd}</planProduction>
    <problemString>${model.problem ? model.problem : 0}</problemString>
    <stoppageString>${model.stopTime ? model.stopTime : 0}</stoppageString>
    <downTimeString>${model.downTime ? model.downTime : 0}</downTimeString>
    <counter>${model.counter}</counter>
</InsertRecord>`);
  },
  TODAY_ENTRIES: () => {
    return XML_REQUEST.WRAPPER(
      `<GetTodaysEntries xmlns="http://tempuri.org/"/>`
    );
  }
};
