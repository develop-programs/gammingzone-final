import Tickets from "@/components/admin-components/Tickets";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

// Random Tickets data
const tickets = [
  {
    ticket_id: 1,
    issue: "Payment gateway error",
    priority: "High",
  },
  {
    ticket_id: 2,
    issue: "Product not delivered",
    priority: "High",
  },
  {
    ticket_id: 3,
    issue: "Incorrect product received",
    priority: "Medium",
  },
  {
    ticket_id: 4,
    issue: "Login issues",
    priority: "Low",
  },
  {
    ticket_id: 5,
    issue: "Refund not processed",
    priority: "High",
  },
  {
    ticket_id: 6,
    issue: "Website downtime",
    priority: "Critical",
  },
  {
    ticket_id: 7,
    issue: "Discount code not working",
    priority: "Medium",
  },
  {
    ticket_id: 8,
    issue: "Order cancellation error",
    priority: "Medium",
  },
  {
    ticket_id: 9,
    issue: "Item out of stock",
    priority: "Low",
  },
  {
    ticket_id: 10,
    issue: "Account suspension",
    priority: "High",
  },
  {
    ticket_id: 11,
    issue: "Slow website performance",
    priority: "Medium",
  },
  {
    ticket_id: 12,
    issue: "Shipping address not recognized",
    priority: "Medium",
  },
  {
    ticket_id: 13,
    issue: "App crash on checkout",
    priority: "High",
  },
  {
    ticket_id: 14,
    issue: "Delayed shipping",
    priority: "Medium",
  },
  {
    ticket_id: 15,
    issue: "Unable to reset password",
    priority: "Low",
  },
  {
    ticket_id: 16,
    issue: "Price discrepancy",
    priority: "Medium",
  },
  {
    ticket_id: 17,
    issue: "Missing order confirmation email",
    priority: "Low",
  },
  {
    ticket_id: 18,
    issue: "Gift card not applied",
    priority: "Low",
  },
  {
    ticket_id: 19,
    issue: "Multiple charges for one order",
    priority: "High",
  },
  {
    ticket_id: 20,
    issue: "Invalid tracking number",
    priority: "Medium",
  },
  {
    ticket_id: 21,
    issue: "Website security vulnerability",
    priority: "Critical",
  },
  {
    ticket_id: 22,
    issue: "Unable to apply loyalty points",
    priority: "Low",
  },
  {
    ticket_id: 23,
    issue: "Order stuck in processing",
    priority: "Medium",
  },
  {
    ticket_id: 24,
    issue: "Inaccurate product description",
    priority: "Medium",
  },
  {
    ticket_id: 25,
    issue: "No response from customer support",
    priority: "High",
  },
  {
    ticket_id: 26,
    issue: "Issues with mobile app notifications",
    priority: "Low",
  },
  {
    ticket_id: 27,
    issue: "Subscription renewal failed",
    priority: "Medium",
  },
  {
    ticket_id: 28,
    issue: "Unable to change account details",
    priority: "Low",
  },
  {
    ticket_id: 29,
    issue: "Broken product received",
    priority: "High",
  },
  {
    ticket_id: 30,
    issue: "Unclear return policy",
    priority: "Medium",
  },
  {
    ticket_id: 31,
    issue: "Unable to leave product review",
    priority: "Low",
  },
  {
    ticket_id: 32,
    issue: "Partial order received",
    priority: "High",
  },
  {
    ticket_id: 33,
    issue: "Items missing from package",
    priority: "High",
  },
  {
    ticket_id: 34,
    issue: "Error updating cart",
    priority: "Medium",
  },
  {
    ticket_id: 35,
    issue: "Checkout button not working",
    priority: "High",
  },
  {
    ticket_id: 36,
    issue: "Subscription cancellation issues",
    priority: "Medium",
  },
  {
    ticket_id: 37,
    issue: "Incorrect billing information",
    priority: "Medium",
  },
  {
    ticket_id: 38,
    issue: "Lost return package",
    priority: "High",
  },
  {
    ticket_id: 39,
    issue: "Expired product received",
    priority: "High",
  },
  {
    ticket_id: 40,
    issue: "Damaged packaging",
    priority: "Medium",
  },
  {
    ticket_id: 41,
    issue: "Unable to track order",
    priority: "Medium",
  },
  {
    ticket_id: 42,
    issue: "Spammy marketing emails",
    priority: "Low",
  },
  {
    ticket_id: 43,
    issue: "Difficulty in finding products",
    priority: "Low",
  },
  {
    ticket_id: 44,
    issue: "Unable to use store credit",
    priority: "Medium",
  },
  {
    ticket_id: 45,
    issue: "No refund for cancelled order",
    priority: "High",
  },
  {
    ticket_id: 46,
    issue: "Duplicate order created",
    priority: "Medium",
  },
  {
    ticket_id: 47,
    issue: "Unhelpful customer service",
    priority: "High",
  },
  {
    ticket_id: 48,
    issue: "Payment installment issues",
    priority: "Medium",
  },
  {
    ticket_id: 49,
    issue: "Website layout issues",
    priority: "Low",
  },
  {
    ticket_id: 50,
    issue: "Delayed customer support response",
    priority: "Medium",
  },
];

export default function page() {
  return (
    <div className="px-12">
      <div className="w-full grid place-content-end">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fixed">Fixed</SelectItem>
            <SelectItem value="Critical">Critical</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {tickets.map((ticket) => (
          <Tickets key={ticket.ticket_id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
