import type { Type } from './PaymentMethod';
import type { LastPaymentError } from './PaymentIntent';
import type { NextAction } from './NextAction';
import type * as PaymentMethod from './PaymentMethod';
export interface Result {
    id: string;
    clientSecret: string;
    lastSetupError: LastPaymentError | null;
    /** The UNIX timestamp (in milliseconds) of the date this Setup Intent was created. */
    created: string | null;
    livemode: boolean;
    paymentMethodId: string | null;
    status: Status;
    paymentMethodTypes: Type[];
    usage: FutureUsage;
    description: string | null;
    nextAction: NextAction | null;
}
export declare type ConfirmParams = PaymentMethod.CardParams | PaymentMethod.IdealParams | PaymentMethod.OxxoParams | PaymentMethod.P24Params | PaymentMethod.AlipayParams | PaymentMethod.GiropayParams | PaymentMethod.SepaParams | PaymentMethod.EpsParams | PaymentMethod.AuBecsDebitParams | PaymentMethod.SofortParams | PaymentMethod.GrabPayParams | PaymentMethod.FPXParams | PaymentMethod.AfterpayClearpayParams | PaymentMethod.KlarnaParams | PaymentMethod.BancontactParams | PaymentMethod.USBankAccountParams;
export declare type ConfirmOptions = {};
export declare type FutureUsage = 'Unknown' | 'None' | 'OnSession' | 'OffSession' | 'OneTime';
export declare enum Status {
    Succeeded = "Succeeded",
    RequiresPaymentMethod = "RequiresPaymentMethod",
    RequiresConfirmation = "RequiresConfirmation",
    Canceled = "Canceled",
    Processing = "Processing",
    RequiresAction = "RequiresAction",
    Unknown = "Unknown"
}
