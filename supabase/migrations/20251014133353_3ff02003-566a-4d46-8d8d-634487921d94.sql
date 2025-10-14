-- Remove name and email columns from survey_responses
ALTER TABLE public.survey_responses 
DROP COLUMN IF EXISTS name,
DROP COLUMN IF EXISTS email,
DROP COLUMN IF EXISTS q25;

-- Update the table to only have 24 questions (q1-q24)