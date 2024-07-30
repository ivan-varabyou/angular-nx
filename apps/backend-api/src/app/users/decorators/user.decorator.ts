import { createParamDecorator, ExecutionContext } from '@nestjs/common'

/**
 * Custom decorator to extract the current user from the execution context.
 * @param data - Optional data.
 * @param ctx - The execution context containing request information.
 * @returns The entire execution context.
 */
export const CurrentUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		return ctx
	}
)
