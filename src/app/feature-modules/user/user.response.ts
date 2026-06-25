export const UserResponse: Record<
"USER_CREATED" | "USER_CREATION_FAILED" | "USER_NOT_FOUND" | "USER_UPDATED_SUCCESSFULLY" | "USER_DELETED_SUCCESSFULLY",{
    statusCode: number, message: any
}> = {
    USER_CREATED : {
        statusCode: 201,
        message: "User created successfully"
    },
    USER_CREATION_FAILED : {
        statusCode: 500,
        message: "User creation failed"
    },
    USER_NOT_FOUND: {
        statusCode: 404,
        message: "User not found"
    },
    USER_UPDATED_SUCCESSFULLY: {
        statusCode: 204,
        message: "User updated successfully"
    },
    USER_DELETED_SUCCESSFULLY : {
        statusCode: 204,
        message: "User deleted successfully"
    },
    
}