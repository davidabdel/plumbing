import { useState } from 'react';
import { GHL_WEBHOOK_URL } from '../constants';

export default function LeadForm({ title, spacing = "space-y-4", padding = "p-6", inputPadding = "p-3" }: { title?: string, spacing?: string, padding?: string, inputPadding?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting the form. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`${padding} flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]`}>
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
        <p className="text-gray-600 text-lg">
          Your request has been received. A plumber will be in contact within 30 minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${padding} ${spacing}`}>
      {title && (
        <div className="mb-4">
           <p className="font-bold text-xl leading-tight uppercase text-center">{title}</p>
        </div>
      )}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
        <input type="text" name="name" required className={`w-full ${inputPadding} border border-gray-300 rounded focus:border-navy outline-none`} />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
        <input type="tel" name="phone" required className={`w-full ${inputPadding} border border-gray-300 rounded focus:border-navy outline-none`} />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
        <input type="email" name="email" required className={`w-full ${inputPadding} border border-gray-300 rounded focus:border-navy outline-none`} />
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Comment/describe your problem</label>
        <textarea name="comment" rows={3} className={`w-full ${inputPadding} border border-gray-300 rounded focus:border-navy outline-none`}></textarea>
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-navy text-white py-4 rounded font-bold text-lg hover:bg-black transition-all disabled:opacity-50"
      >
        {loading ? 'SENDING...' : 'GET FREE QUOTE'}
      </button>
    </form>
  );
}
