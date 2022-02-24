import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

const currentDate = document.write(today);
const schedulerData = [
  {
    startDate: "2021-07-29T09:45",
    endDate: "2021-07-29T11:00",
    title: "Rahul S",
  },
  {
    startDate: "2021-07-29T12:00",
    endDate: "2021-07-29T13:30",
    title: "Rahul S",
  },
  {
    startDate: "2021-07-26T09:45",
    endDate: "2021-07-26T11:00",
    title: "Rahul S",
  },
];

export default function schedule() {
  return (
    <Paper>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <WeekView startDayHour={9} endDayHour={13} />
        <Appointments />
        <CurrentTimeIndicator />
      </Scheduler>
    </Paper>
  );
}
