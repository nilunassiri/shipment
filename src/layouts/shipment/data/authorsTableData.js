export default function data(shipments) {
  if (shipments == null) {
    // eslint-disable-next-line no-param-reassign
    shipments = [
      {
        orderNo: "",
        date: "",
        customer: "",
        trackingNo: "",
        status: "",
        consignee: "",
      },
    ];
  }

  return {
    columns: [
      { Header: "orderNo", accessor: "orderNo", width: "45%", align: "left" },
      { Header: "date", accessor: "date", align: "left" },
      { Header: "customer", accessor: "customer", align: "center" },
      { Header: "trackingNo", accessor: "trackingNo", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "consignee", accessor: "consignee", align: "center" },
    ],
    rows: shipments,
  };
}
