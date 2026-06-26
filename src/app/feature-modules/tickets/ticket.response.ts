export const ticketResponse: Record<
  | "TICKET_CREATED_SUCCESSFULLY"
  | "TICKET_NOT_FOUND"
  | "CATEGORY_NOT_FOUND"
  | "NOT_YOUR_TICKET"
  | "AGENT_NOT_FOUND"
  | "TICKET_REASSIGNED_SUCCESSFULLY"
  | "TICKET_ALREADY_RESOLVED"
  | "TICKET_NOT_RESOLVED_YET"
  | "TICKET_ALREADY_RATED"
  | "RATED_SUCCESSFULLY"
  | "PRIORITY_UPDATED_SUCCESSFULLY",
  {
    statusCode: number;
    message: string;
  }
> = {
  TICKET_CREATED_SUCCESSFULLY: {
    statusCode: 201,
    message: "Ticket created successfully.",
  },
  TICKET_NOT_FOUND: {
    statusCode: 404,
    message: "Ticket not found.",
  },
  CATEGORY_NOT_FOUND: {
    statusCode: 404,
    message: "Category not found.",
  },
  NOT_YOUR_TICKET: {
    statusCode: 403,
    message: "You don't have access to this ticket.",
  },
  AGENT_NOT_FOUND: {
    statusCode: 404,
    message: "Agent not found.",
  },
  TICKET_REASSIGNED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Ticket reassigned successfully.",
  },
  TICKET_ALREADY_RESOLVED: {
    statusCode: 400,
    message: "This ticket is already resolved. Ask your agent to reopen it if the issue isn't fixed.",
  },
  TICKET_NOT_RESOLVED_YET: {
    statusCode: 400,
    message: "This ticket isn't resolved, so it can't be reopened.",
  },
  TICKET_ALREADY_RATED: {
    statusCode: 400,
    message: "You've already rated this ticket.",
  },
  RATED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Thanks for your feedback.",
  },
  PRIORITY_UPDATED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Ticket priority updated successfully.",
  },
};