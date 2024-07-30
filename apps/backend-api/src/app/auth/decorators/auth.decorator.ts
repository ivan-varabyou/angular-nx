import { createParamDecorator, ExecutionContext } from '@nestjs/common'

/**
 * A custom decorator for sign-in functionality.
 * It extracts the `username` and `password` from the second argument of the
 * `ExecutionContext`.
 * @param data - The data parameter is not used in this decorator.
 * @param ctx - The `ExecutionContext` object containing the request context.
 * @returns An object with the `username` and `password` extracted from the
 *   request context.
 * @example
 * // Usage example
 * @SignIn()
 * async signIn(@Body() signInDto: SignInDto) {
 *   // Access the `username` and `password` from the `SignIn` decorator
 *   const { username, password } = this.SignIn(undefined, context);
 *   // Rest of the implementation
 * }
 */
export const SignIn = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
	const args = ctx.getArgs()[1]
	console.log(ctx.getArgs(), 'ctx.getArgs()')
	return {username: args.username, password: args.password}
})