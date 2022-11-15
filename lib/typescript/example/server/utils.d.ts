export declare const generateResponse: (intent: any) => {
    clientSecret: string | null;
    requiresAction: boolean;
    status: string;
} | {
    clientSecret: string | null;
    status: string;
} | {
    error: string;
};
