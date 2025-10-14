-- Create survey_responses table
CREATE TABLE public.survey_responses (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  email text,
  name text,
  q1 text NOT NULL,
  q2 text NOT NULL,
  q3 text NOT NULL,
  q4 text NOT NULL,
  q5 text NOT NULL,
  q6 text NOT NULL,
  q7 text NOT NULL,
  q8 text NOT NULL,
  q9 text NOT NULL,
  q10 text NOT NULL,
  q11 text NOT NULL,
  q12 text NOT NULL,
  q13 text NOT NULL,
  q14 text NOT NULL,
  q15 text NOT NULL,
  q16 text NOT NULL,
  q17 text NOT NULL,
  q18 text NOT NULL,
  q19 text NOT NULL,
  q20 text NOT NULL,
  q21 text NOT NULL,
  q22 text NOT NULL,
  q23 text NOT NULL,
  q24 text NOT NULL,
  q25 text NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit survey responses
CREATE POLICY "Anyone can submit survey responses"
ON public.survey_responses
FOR INSERT
TO public
WITH CHECK (true);