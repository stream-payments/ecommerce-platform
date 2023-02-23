import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
  } from "@stream-pay/react-streampay-js"
  import {
    StreamPayCardCvcElementOptions,
    StreamPayCardExpiryElementOptions,
    StreamPayCardNumberElementOptions,
  } from "@stream-pay/streampay-js"
  import React, { useMemo } from "react"
  
  const PaymentStreamPay: React.FC = () => {
    const useOptions:
      | StreamPayCardNumberElementOptions
      | StreamPayCardExpiryElementOptions
      | StreamPayCardCvcElementOptions = useMemo(() => {
      return {
        style: {
          base: {
            fontFamily: "Inter, sans-serif",
            color: "#0968E5",
            padding: "10px 12px",
            "::placeholder": {
              color: "#CFD7E0",
            },
          },
        },
      }
    }, [])
  
    return (
      <div>
        <div className="flex flex-col relative w-full pb-6">
          <CardNumber options={useOptions as StreamPayCardNumberElementOptions} />
          <div className="flex items-center mt-12 relative gap-x-4">
            <CardExpiry options={useOptions as StreamPayCardExpiryElementOptions} />
            <CardCVC options={useOptions as StreamPayCardCvcElementOptions} />
          </div>
        </div>
      </div>
    )
  }
  
  const CardNumber = ({
    options,
  }: {
    options: StreamPayCardNumberElementOptions
  }) => {
    return (
      <div className="border-b border-gray-200 py-2 relative">
        <span className="absolute -top-6 text-gray-700 text-base-regular">
          Card number
        </span>
        <CardNumberElement options={options} />
      </div>
    )
  }
  
  const CardExpiry = ({
    options,
  }: {
    options: StreamPayCardExpiryElementOptions
  }) => {
    return (
      <div className="border-b border-gray-200 w-full py-2 relative">
        <span className="absolute -top-6 text-gray-700 text-base-regular">
          Expiration date
        </span>
        <CardExpiryElement options={options} />
      </div>
    )
  }
  
  const CardCVC = ({ options }: { options: StreamPayCardCvcElementOptions }) => {
    return (
      <div className="border-b border-gray-200 w-full py-2 relative">
        <span className="absolute -top-6 text-gray-700 text-base-regular">
          CVC
        </span>
        <CardCvcElement options={{ ...options, placeholder: "123" }} />
      </div>
    )
  }
  
  export default PaymentStreamPay
  