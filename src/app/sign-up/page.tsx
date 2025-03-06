import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const SignUp = () => {
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

            </CardContent>
        </Card>
    </div>
  )
}

export default SignUp