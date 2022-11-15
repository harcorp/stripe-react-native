import { ApplePay, ApplePayError, ApplePayResult, ConfirmPaymentResult, ConfirmPaymentSheetPaymentResult, SetupIntent, PaymentIntent, ConfirmSetupIntentResult, CreatePaymentMethodResult, CreateTokenForCVCUpdateResult, CreateTokenResult, GooglePayInitResult, HandleNextActionResult, InitPaymentSheetResult, PaymentMethod, PaymentSheet, PayWithGooglePayResult, PresentPaymentSheetResult, RetrievePaymentIntentResult, RetrieveSetupIntentResult, StripeError, GooglePay, CreateGooglePayPaymentMethodResult, OpenApplePaySetupResult, Token, VerifyMicrodepositsParams, VerifyMicrodepositsForPaymentResult, VerifyMicrodepositsForSetupResult, CollectBankAccountForPaymentResult, CollectBankAccountForSetupResult, IsCardInWalletResult, CanAddCardToWalletParams, CanAddCardToWalletResult, FinancialConnections } from './types';
export declare const createPaymentMethod: (params: PaymentMethod.CreateParams, options?: PaymentMethod.CreateOptions) => Promise<CreatePaymentMethodResult>;
export declare const createToken: (params: Token.CreateParams) => Promise<CreateTokenResult>;
export declare const retrievePaymentIntent: (clientSecret: string) => Promise<RetrievePaymentIntentResult>;
export declare const retrieveSetupIntent: (clientSecret: string) => Promise<RetrieveSetupIntentResult>;
/**
 * Confirm and, if necessary, authenticate a PaymentIntent.
 *
 * @param {string} paymentIntentClientSecret The client_secret of the associated [PaymentIntent](https://stripe.com/docs/api/payment_intents).
 * @param {object=} params An optional object that contains data related to the payment method used to confirm this payment. If no object is provided (undefined), then it is assumed that the payment method has already been [attached  to the Payment Intent](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method).
 * @param {object=} options An optional object that contains options for this payment method.
 * @returns A promise that resolves to an object containing either a `paymentIntent` field, or an `error` field.
 */
export declare const confirmPayment: (paymentIntentClientSecret: string, params?: PaymentMethod.CreateParams | undefined, options?: PaymentIntent.ConfirmOptions) => Promise<ConfirmPaymentResult>;
export declare const isApplePaySupported: () => Promise<boolean>;
export declare const presentApplePay: (params: ApplePay.PresentParams) => Promise<ApplePayResult>;
export declare const updateApplePaySummaryItems: (summaryItems: ApplePay.CartSummaryItem[], errorAddressFields?: Array<{
    field: ApplePay.AddressFields;
    message?: string;
}>) => Promise<{
    error?: StripeError<ApplePayError>;
}>;
export declare const confirmApplePayPayment: (clientSecret: string) => Promise<{
    error?: StripeError<ApplePayError>;
}>;
/** Handles any nextAction required to authenticate the PaymentIntent.
 * Call this method if you are using manual confirmation. See https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=custom
 *
 * @param {string} paymentIntentClientSecret The client secret associated with the PaymentIntent.
 * @param {string=} returnURL An optional return URL so the Stripe SDK can redirect back to your app after authentication. This should match the `return_url` you specified during PaymentIntent confirmation.
 * */
export declare const handleNextAction: (paymentIntentClientSecret: string, returnURL?: string | undefined) => Promise<HandleNextActionResult>;
export declare const confirmSetupIntent: (paymentIntentClientSecret: string, params: SetupIntent.ConfirmParams, options?: SetupIntent.ConfirmOptions) => Promise<ConfirmSetupIntentResult>;
export declare const createTokenForCVCUpdate: (cvc: string) => Promise<CreateTokenForCVCUpdateResult>;
export declare const handleURLCallback: (url: string) => Promise<boolean>;
export declare const verifyMicrodepositsForPayment: (clientSecret: string, params: VerifyMicrodepositsParams) => Promise<VerifyMicrodepositsForPaymentResult>;
export declare const verifyMicrodepositsForSetup: (clientSecret: string, params: VerifyMicrodepositsParams) => Promise<VerifyMicrodepositsForSetupResult>;
export declare const initPaymentSheet: (params: PaymentSheet.SetupParams) => Promise<InitPaymentSheetResult>;
export declare const presentPaymentSheet: () => Promise<PresentPaymentSheetResult>;
export declare const confirmPaymentSheetPayment: () => Promise<ConfirmPaymentSheetPaymentResult>;
/**
 * You must call this method when the user logs out from your app. This will ensure that
 * any persisted authentication state in the PaymentSheet, such as authentication cookies,
 * is also cleared during logout.
 */
export declare const resetPaymentSheetCustomer: () => Promise<null>;
export declare const isGooglePaySupported: (params?: GooglePay.IsSupportedParams | undefined) => Promise<boolean>;
export declare const initGooglePay: (params: GooglePay.InitParams) => Promise<GooglePayInitResult>;
export declare const presentGooglePay: (params: GooglePay.PresentParams) => Promise<PayWithGooglePayResult>;
export declare const createGooglePayPaymentMethod: (params: GooglePay.CreatePaymentMethodParams) => Promise<CreateGooglePayPaymentMethodResult>;
export declare const openApplePaySetup: () => Promise<OpenApplePaySetupResult>;
export declare const collectBankAccountForPayment: (clientSecret: string, params: PaymentMethod.CollectBankAccountParams) => Promise<CollectBankAccountForPaymentResult>;
export declare const collectBankAccountForSetup: (clientSecret: string, params: PaymentMethod.CollectBankAccountParams) => Promise<CollectBankAccountForSetupResult>;
/**
 * Use collectBankAccountToken in the [Add a Financial Connections Account to a US Custom Connect](https://stripe.com/docs/financial-connections/connect-payouts) account flow.
 * When called, it will load the Authentication Flow, an on-page modal UI which allows your user to securely link their external financial account for payouts.
 * @param {string} clientSecret The client_secret of the [Financial Connections Session](https://stripe.com/docs/api/financial_connections/session).
 * @returns A promise that resolves to an object containing either `session` and `token` fields, or an error field.
 */
export declare const collectBankAccountToken: (clientSecret: string) => Promise<FinancialConnections.TokenResult>;
/**
 * Use collectFinancialConnectionsAccounts in the [Collect an account to build data-powered products](https://stripe.com/docs/financial-connections/other-data-powered-products) flow.
 * When called, it will load the Authentication Flow, an on-page modal UI which allows your user to securely link their external financial account.
 * @param {string} clientSecret The client_secret of the [Financial Connections Session](https://stripe.com/docs/api/financial_connections/session).
 * @returns A promise that resolves to an object containing either a `session` field, or an error field.
 */
export declare const collectFinancialConnectionsAccounts: (clientSecret: string) => Promise<FinancialConnections.SessionResult>;
export declare const canAddCardToWallet: (params: CanAddCardToWalletParams) => Promise<CanAddCardToWalletResult>;
export declare const isCardInWallet: (params: {
    cardLastFour: string;
}) => Promise<IsCardInWalletResult>;
export declare const Constants: {
    API_VERSIONS: {
        CORE: string;
        ISSUING: string;
    };
};
