import { httpClient } from "@/app/shared/api/httpClient";

export type PlanCode = "BAS" | "PRO" | "PRE";

export interface PlanResponseProps {
  billing_period: string;
  code: PlanCode;
  currency: string;
  id: number;
  long_description: string | null;
  name: string;
  services?: string[];
  price_cents: number | null;
  short_description: string | null;
  stripe_price_id: string;
  stripe_product_id: string;  
}

export interface GetPlanResponse {
  newPlan: PlanResponseProps[];
}

export interface PLAN_COLORSProps {
  code: PlanCode;
}


  export const PLAN_COLORS: Record<PlanCode, string> = {
    BAS: "#E5E7EB",
    PRO: "#3B82F6",
    PRE: "#F97316",
  };

export function getPlans(param? : string) {
  let URL = "";
  if (param !== "") {
    URL = `/api/plans?include=${param}`;
  } else {
    URL = `/api/plans`;
  }
  return httpClient<GetPlanResponse>(URL, {
    method: "GET",
    auth: false,
  });
}

export function getPlan(id: string){
  console.log('EL ID: ', id)
  return httpClient<GetPlanResponse>(`/api/plans/${id}`, {
    method: 'GET',
    auth: false,
  });
}