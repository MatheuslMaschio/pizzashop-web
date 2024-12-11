import { api } from "@/lib/axios";

export interface ApproveOrderParams {
    orderId: string;
}

export async function approveOrder({ orderId }: { orderId: string }) {
    await api.patch(`/orders/${orderId}/approve`);
}