-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.demo_submissions;

-- Submissions are now only viewable by database admins via the Cloud dashboard
-- The INSERT policy still allows anyone to submit demo requests (public form)
-- This protects customer contact information from unauthorized access