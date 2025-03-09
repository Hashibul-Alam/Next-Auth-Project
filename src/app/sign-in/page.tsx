"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="h-full flex items-center justify-center " >
        <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8 ">
            <CardHeader>
                <CardTitle className="text-center">
                    Welcome Sign In Form
                </CardTitle>
                <CardDescription className="text-center text-sm  ">
                    Use email or service, to Sign in
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action="">
                   
                    <Input type="email" disabled={false} placeholder="admin@gmail.com" value={} onChange={} required />
                    <Input type="password" disabled={false} placeholder="password" value={} onChange={} required />
                   
                    <Button className="w-full" size={"lg"} disabled={false} >
                        Continue
                    </Button>
                </form>

                    <Separator/>
                    <div className="flex justify-center gap-5" >
                        <Button
                       disabled= { false}
                        onClick={()=>{}}
                        variant="outline"
                        size="lg"
                        className="bg-slate-300 hover:bg-slate-400 hover:scale-110">
                            <FcGoogle className="size-8 left-2.5 top-2.5"/>
                        </Button>

                        <Button
                       disabled= { false}
                        onClick={()=>{}}
                        variant="outline"
                        size="lg"
                        className="bg-slate-300 hover:bg-slate-400 hover:scale-110">
                            <FaGithub className="size-8 left-2.5 top-2.5"/>
                        </Button>
                    </div>
                    <p className="text-center text-sm mt-2 text-muted-foreground" >Create new account</p>
                    <Link className="text-sky-700 ml-4 hover:underline cursor-pointer" href="/sign-up">Sign up</Link>

            </CardContent>
        </Card>
    </div>
  )
}

export default SignUp