import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface DemoSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string | null;
  message: string | null;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [submissions, setSubmissions] = useState<DemoSubmission[]>([]);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    // Try to load submissions - if it fails due to RLS, user doesn't have access
    const { data, error } = await supabase
      .from('demo_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setHasAccess(false);
      setIsLoading(false);
    } else {
      setHasAccess(true);
      setSubmissions(data || []);
      setIsLoading(false);
    }
  };

  const loadSubmissions = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('demo_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load submissions",
        variant: "destructive",
      });
    } else {
      setSubmissions(data || []);
    }
    setIsLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="text-center py-8 text-muted-foreground">Loading...</div>
        ) : !hasAccess ? (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Access Denied</AlertTitle>
            <AlertDescription>
              You don't have admin privileges. Admin roles need to be assigned in the backend.
              Please contact your administrator or assign yourself the 'admin' role in the user_roles table.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="bg-card rounded-3xl p-8 card-shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-foreground">Demo Submissions</h2>
              <Button onClick={loadSubmissions} variant="outline" size="sm">
                Refresh
              </Button>
            </div>

            {submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No submissions yet</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="whitespace-nowrap">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{submission.name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.company}</TableCell>
                        <TableCell>{submission.role}</TableCell>
                        <TableCell>{submission.phone || '-'}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {submission.message || '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
