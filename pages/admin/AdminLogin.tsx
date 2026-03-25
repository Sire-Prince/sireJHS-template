"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lock } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({ 
        title: "Validation Error", 
        description: "Please enter both email and password", 
        variant: "destructive" 
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });

      if (error) {
        let errorMessage = error.message;
        if (error.message.includes("Invalid login credentials")) {
          errorMessage = "Invalid email or password. Please try again.";
        } else if (error.message.includes("Email not confirmed")) {
          errorMessage = "Please verify your email address before logging in.";
        } else if (error.message.includes("rate limit")) {
          errorMessage = "Too many attempts. Please try again later.";
        }
        
        toast({ 
          title: "Login Failed", 
          description: errorMessage, 
          variant: "destructive" 
        });
      } else if (data?.session) {
        toast({ 
          title: "Welcome Back!", 
          description: "Redirecting to dashboard...", 
          variant: "default" 
        });
        
        setTimeout(() => {
          router.push("/admin");
        }, 1000);
      }
    } catch (err: any) {
      let errorMessage = "Failed to connect to server. Please check your internet connection.";
      
      if (err.message === "Failed to fetch") {
        errorMessage = "Cannot connect to Supabase. Please check your environment variables and internet connection.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      toast({ 
        title: "Connection Error", 
        description: errorMessage, 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      <Card className="w-full max-w-md border-slate-800 bg-slate-900/90 backdrop-blur-sm shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Admin Portal</CardTitle>
          <CardDescription className="text-slate-400">
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="admin@school.com"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              disabled={loading}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Sign In"}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <p className="text-xs text-slate-400 text-center">
              School Management System Admin Login. Use your admin credentials to access the dashboard. 
              If you have trouble logging in, please contact support.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;