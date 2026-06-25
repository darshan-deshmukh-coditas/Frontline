export const agentCategoryResponse : Record<
"AGENT_NOT_FOUND"
| "AGENT_ASSIGNED_SUCCESSFULLY" 
| "AGENT_REASSIGNED_SUCCESSFULLY"
| "AGENT_ASSIGNMENT_FAIL",
{
    statusCode: number;
    message: string;
}
> ={
    AGENT_NOT_FOUND: {
    statusCode: 404,
    message: "Agent not found.",
  },
    AGENT_ASSIGNED_SUCCESSFULLY: {
        statusCode: 200,
        message: "Agent assigned successfully"
    },
    AGENT_REASSIGNED_SUCCESSFULLY: {
        statusCode: 200,
        message: "Agent reassigned successfully"
    },
    AGENT_ASSIGNMENT_FAIL: {
        statusCode: 500,
        message: "Agent reassignment failed"
    }
}
