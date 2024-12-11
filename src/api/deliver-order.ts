import { api } from "@/lib/axios";

export interface DeliverOrderParams {
    orderId: string;
}

export async function deliverOrder({ orderId }: { orderId: string }) {
    await api.patch(`/orders/${orderId}/deliver`);
}