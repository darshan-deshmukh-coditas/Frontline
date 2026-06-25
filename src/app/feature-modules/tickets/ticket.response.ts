export const ticketResponse: Record<
  | "TICKET_CREATED_SUCCESSFULLY"
  | "TICKET_CREATION_FAIL"
  | "TICKET_NOT_FOUND"
  | "CATEGORY_NOT_FOUND"
  | "CATEGORY_NOT_IN_THIS_COMPANY"
  | "NOT_YOUR_TICKET"
  | "AGENT_NOT_FOUND"
  | "AGENT_NOT_IN_THIS_COMPANY"
  | "TICKET_REASSIGNED_SUCCESSFULLY"
  | "TICKET_REASSIGN_FAIL"
  | "TICKET_ALREADY_RESOLVED"
  | "TICKET_NOT_ASSIGNED_YET"
  | "TICKET_ALREADY_IN_PROGRESS"
  | "STARTED_PROGRESS_SUCCESSFULLY"
  | "TICKET_RESOLVED_SUCCESSFULLY"
  | "CANNOT_RESOLVE_UNSTARTED_TICKET"
  | "TICKET_NOT_RESOLVED_YET"
  | "TICKET_REOPENED_SUCCESSFULLY"
  | "RATING_REQUIRES_RESOLVED_TICKET"
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
  TICKET_CREATION_FAIL: {
    statusCode: 500,
    message: "Ticket creation failed.",
  },
  TICKET_NOT_FOUND: {
    statusCode: 404,
    message: "Ticket not found.",
  },
  CATEGORY_NOT_FOUND: {
    statusCode: 404,
    message: "Category not found.",
  },
  CATEGORY_NOT_IN_THIS_COMPANY: {
    statusCode: 400,
    message: "This category does not belong to your company.",
  },
  NOT_YOUR_TICKET: {
    statusCode: 403,
    message: "You don't have access to this ticket.",
  },
  AGENT_NOT_FOUND: {
    statusCode: 404,
    message: "Agent not found.",
  },
  AGENT_NOT_IN_THIS_COMPANY: {
    statusCode: 400,
    message: "This agent does not belong to your company.",
  },
  TICKET_REASSIGNED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Ticket reassigned successfully.",
  },
  TICKET_REASSIGN_FAIL: {
    statusCode: 500,
    message: "Ticket reassignment failed.",
  },
  TICKET_ALREADY_RESOLVED: {
    statusCode: 400,
    message: "This ticket is already resolved. Ask your agent to reopen it if the issue isn't fixed.",
  },
  TICKET_NOT_ASSIGNED_YET: {
    statusCode: 400,
    message: "This ticket hasn't been assigned to an agent yet.",
  },
  TICKET_ALREADY_IN_PROGRESS: {
    statusCode: 400,
    message: "This ticket is already in progress.",
  },
  STARTED_PROGRESS_SUCCESSFULLY: {
    statusCode: 200,
    message: "Ticket marked as in progress.",
  },
  TICKET_RESOLVED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Ticket resolved successfully.",
  },
  CANNOT_RESOLVE_UNSTARTED_TICKET: {
    statusCode: 400,
    message: "Start working on this ticket before resolving it.",
  },
  TICKET_NOT_RESOLVED_YET: {
    statusCode: 400,
    message: "This ticket isn't resolved, so it can't be reopened.",
  },
  TICKET_REOPENED_SUCCESSFULLY: {
    statusCode: 200,
    message: "Ticket reopened successfully.",
  },
  RATING_REQUIRES_RESOLVED_TICKET: {
    statusCode: 400,
    message: "You can only rate a ticket after it has been resolved.",
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