import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const orders = [
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
    {
      orderNumber: "376628",
      amount: "493",
      status: "$4565.19",
      dateCreated: "Tue Mar 12 2016 (46:33 AM",
    },
  ]
  
  export default function ClientOrders() {
    return (
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Order Number</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.orderNumber}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.dateCreated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  