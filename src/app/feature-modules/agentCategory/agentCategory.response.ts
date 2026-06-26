export const agentCategoryResponse : Record<
"AGENT_NOT_FOUND"
| "AGENT_ASSIGNED_SUCCESSFULLY" 
| "AGENT_REASSIGNED_SUCCESSFULLY"
| "AGENT_ASSIGNMENT_FAIL"
| "CATEGORY_NOT_FOUND"
| "AGENT_HAS_NO_CATEGORY"
| "UNASSIGNED_SUCCESSFULLY",
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
    },
    CATEGORY_NOT_FOUND : {
        statusCode: 404,
        message: "Category not found"
    },
    AGENT_HAS_NO_CATEGORY: {
        statusCode: 404,
        message: "This agent is not assigned to any category"
    },
    UNASSIGNED_SUCCESSFULLY: {
        statusCode: 204,
        message: "Agent removed from category."

    }
}
