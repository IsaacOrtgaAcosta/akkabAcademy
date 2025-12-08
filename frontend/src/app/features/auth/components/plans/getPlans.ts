import {httpClient} from '@/app/shared/api/httpClient';

export interface Plan{
    id: string;
    name: string;
    prince: number;
}

export function getPlans(){
    return httpClient<Plan[]>('/plans', {
        method: "GET",
        auth: true
    });
}