
-- Table for twin applications
CREATE TABLE public.twin_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  referral_code TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

ALTER TABLE public.twin_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit twin application"
ON public.twin_applications FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view twin applications"
ON public.twin_applications FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Table for brand pilot applications
CREATE TABLE public.brand_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  company TEXT NOT NULL,
  industry TEXT NOT NULL,
  monthly_research_spend TEXT NOT NULL,
  biggest_bottleneck TEXT NOT NULL,
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
);

ALTER TABLE public.brand_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit brand application"
ON public.brand_applications FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view brand applications"
ON public.brand_applications FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));
