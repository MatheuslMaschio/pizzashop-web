import { api } from "@/lib/axios";

export interface DispatchOrderParams {
    orderId: string;
}

export async function dispatchOrder({ orderId }: { orderId: string }) {
    await api.patch(`/orders/${orderId}/dispatch`);
}