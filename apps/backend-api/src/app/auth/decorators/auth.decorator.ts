import {createParamDecorator, ExecutionContext} from "@nestjs/common";

export const SignIn = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const args = ctx.getArgs()[1]
    console.log(ctx.getArgs(), "ctx.getArgs()")
    return {username: args.username, password: args.password}
})