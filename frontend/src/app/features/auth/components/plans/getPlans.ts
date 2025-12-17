import { httpClient } from "@/app/shared/api/httpClient";

export interface Plan {
  id: string;
  name: string;
  prince: number;
}

export function getPlans(param? : string) {
  let URL = "";
  if (param !== "") {
    URL = `/api/plans?include=${param}`;
  } else {
    URL = `/api/plans`;
  }
  return httpClient<Plan[]>(URL, {
    method: "GET",
    auth: false,
  });
}