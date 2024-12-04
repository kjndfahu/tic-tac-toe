import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import React, { useId } from "react";
export function AuthFields({errors, formData} : {
    formData?:FormData,
    errors?: {
        login?: string,
        password?: string,
    }
}) {
    const loginId = useId();
    const passwordId = useId();
    return (
        <>
            <div className="space-y-2">
                <Label htmlFor={loginId}>Login</Label>
                <Input
                    id={loginId}
                    name="login"
                    type="login"
                    placeholder="Enter your login"
                    required
                    defaultValue={formData?.get("login")?.toString()}
                />
                {errors?.login && <div>{errors.login}</div>}
            </div>
            <div className="space-y-2">
                <Label htmlFor={passwordId}>Password</Label>
                <Input
                    id={passwordId}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    defaultValue={formData?.get("password")?.toString()}
                />
                {errors?.password && <div>{errors.password}</div>}
            </div>
        </>
    );
}