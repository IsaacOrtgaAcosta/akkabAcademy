import {httpClient} from '@/app/shared/api/httpClient';

export function getPlans(){
    return httpClient('/plans');
}