import React, { useState } from 'react';
import { loadStripe, Stripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface DonationFormProps {
  startupName: string;
  onClose: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ startupName, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card element not found');
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message || 'An error occurred');
      setProcessing(false);
      return;
    }

    try {
      const response = await fetch('/api/create-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          startupName,
          amount: 1000, // $10.00 in cents
        }),
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setProcessing(false);
  };

  if (success) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you for your donation!</h2>
        <button
          onClick={onClose}
          className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="border p-3 rounded-lg" />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 disabled:bg-gray-300"
      >
        {processing ? 'Processing...' : 'Donate $10'}
      </button>
    </form>
  );
};

interface DonationModalProps {
  startupName: string;
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ startupName, isOpen, onClose }) => {
  if (!isOpen) return null;

  const options: StripeElementsOptions = {
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Donate to {startupName}</h2>
        <Elements stripe={stripePromise} options={options}>
          <DonationForm startupName={startupName} onClose={onClose} />
        </Elements>
      </div>
    </div>
  );
};

export default DonationModal;