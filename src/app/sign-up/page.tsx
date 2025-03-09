"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
   const [form, setForm] =useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
   })
   const [pending , setPending] = useState(false)
   const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    setPending(true)

    const res = await fetch("/api/auth/signup",{
        method: "POST",
        headers:{
            "contant-type": "application/json"
        },
        body: JSON.stringify(form)
    })
   }
  return (
    <div className="h-full flex items-center justify-center " >
        <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8 ">
            <CardHeader>
                <CardTitle className="text-center">
                    Welcome Sign Up Form
                </CardTitle>
                <CardDescription className="text-center text-sm  ">
                    Use email or service, to create account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action="" className="space-y-4" onSubmit={handleSubmit} >
                    <Input type="text" disabled={pending} placeholder="Full Name" value={form.name} onChange={(e)=> setForm({...form , name: e.target.value}) } required />
                    <Input type="email" disabled={pending} placeholder="admin@gmail.com" value={form.email} onChange={(e)=> setForm({...form, email:e.target.value})} required />
                    <Input type="password" disabled={pending} placeholder="current-password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} required />

                    <Input type="password" disabled={pending} placeholder="confirm-password" value={form.confirmPassword} onChange={(e)=>setForm({...form, confirmPassword:e.target.value})} required  />

                    <Button className="w-full" size={"lg"} disabled={pending} >
                        Continue
                    </Button>
                </form>

                    <Separator/>
                    <div className="flex justify-center gap-5" >
                        <Button
                       disabled= { pending}
                        onClick={()=>{}}
                        variant="outline"
                        size="lg"
                        className="bg-slate-300 hover:bg-slate-400 hover:scale-110">
                            <FcGoogle className="size-8 left-2.5 top-2.5"/>
                        </Button>

                        <Button
                       disabled= { pending}
                        onClick={()=>{}}
                        variant="outline"
                        size="lg"
                        className="bg-slate-300 hover:bg-slate-400 hover:scale-110">
                            <FaGithub className="size-8 left-2.5 top-2.5"/>
                        </Button>
                    </div>
                    <p className="text-center text-sm mt-2 text-muted-foreground" >Already have an account</p>
                    <Link className="text-sky-700 ml-4 hover:underline cursor-pointer" href="/sign-in">Sign in</Link>

            </CardContent>
        </Card>
    </div>
  )
}

export default SignUp