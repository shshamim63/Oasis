import Filter from "../../ui/Filter";

const dashBoardFilterOptions = [
  {
    value: "7",
    label: "Last 7 days",
  },
  {
    value: "30",
    label: "Last 30 days",
  },
  {
    value: "90",
    label: "Last 90 days",
  },
];

function DashboardFilter() {
  return <Filter filterField="last" options={dashBoardFilterOptions} />;
}

export default DashboardFilter;
