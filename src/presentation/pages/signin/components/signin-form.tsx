import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { Button } from "@/presentation/components/ui/button";
import { signin } from "@/main/requests/auth/signin";
import { useToast } from "@/presentation/components/ui/use-toast";
import { ROUTES } from "@/utils/routes";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "@/presentation/components/ui/loader";

const formSchema = z.object({
  tag: z
    .string()
    .min(2, { message: "Tag must be at least 2 characters long" })
    .max(25, { message: "Tag must be at most 25 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(25, { message: "Password must be at most 25 characters long" }),
});

export function SignInForm() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState<"password" | "text">("password");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tag: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await signin(values);

      if (!response.success) {
        toast({ title: response.message });
        return;
      }

      localStorage.setItem("token", response.body.token);
      navigate(ROUTES.APP);
    } catch (error) {
      toast({
        title: "An error occurred while trying to sign in. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <Loader title="Verificando credenciais..." />
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center justify-center p-3 space-y-3 max-w-sm mx-auto"
            >
              <legend className="self-start text-2xl font-semibold">
                {(() => {
                  const hour = new Date().getHours();
                  if (hour >= 0 && hour < 12) return "Good morning!";
                  if (hour >= 12 && hour < 18) return "Good afternoon!";
                  if (hour >= 18 && hour < 24) return "Good evening!";
                })()}
              </legend>

              <FormField
                control={form.control}
                name="tag"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Tag</FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          id="tag"
                          type="text"
                          placeholder="yourtag"
                          required
                          className="pl-8"
                          {...field}
                        />
                        <AtSign className="absolute left-2 text-zinc-200 size-5" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          type={passwordType}
                          id="password"
                          placeholder="At least 6 characters"
                          required
                          className="pr-8"
                          {...field}
                        />
                        {passwordType === "password" ? (
                          <Eye
                            className="absolute right-2 text-zinc-500 cursor-pointer hover:opacity-80"
                            onClick={() => setPasswordType("text")}
                          />
                        ) : (
                          <EyeOff
                            className="absolute right-2 text-zinc-500 cursor-pointer hover:opacity-80"
                            onClick={() => setPasswordType("password")}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          </Form>

          <Link to={ROUTES.SIGNUP}>
            <Button variant="link" className="w-full">
              Don't have an account? Sign up
            </Button>
          </Link>
        </>
      )}
    </>
  );
}
