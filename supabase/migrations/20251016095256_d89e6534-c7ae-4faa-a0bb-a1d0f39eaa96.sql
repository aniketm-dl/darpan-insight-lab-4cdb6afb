-- Add q25 column to survey_responses table
ALTER TABLE public.survey_responses 
ADD COLUMN IF NOT EXISTS q25 text NOT NULL DEFAULT '';