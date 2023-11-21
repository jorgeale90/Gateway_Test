export interface IGateway {
    id?: string;
    serial?: string;
    name?: string;
    ip?: string;
}

export interface IPeripheral {
    id?: string;
    uid?: number;
    vendor?: string;
    status?: string;
    gatewayId?: string;
    gateway?: IGateway;
}
