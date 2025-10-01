-- Create demo_submissions table
CREATE TABLE public.demo_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.demo_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit the form (public insert)
CREATE POLICY "Anyone can submit demo requests"
ON public.demo_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- For now, allow authenticated users to view submissions
-- You can restrict this further to specific admin roles later
CREATE POLICY "Authenticated users can view submissions"
ON public.demo_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create index for faster lookups by email and created_at
CREATE INDEX idx_demo_submissions_email ON public.demo_submissions(email);
CREATE INDEX idx_demo_submissions_created_at ON public.demo_submissions(created_at DESC);