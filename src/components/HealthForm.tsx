import React from 'react';
import { Save } from 'lucide-react';

interface HealthFormProps {
  onSubmit: (data: any) => void;
}

export function HealthForm({ onSubmit }: HealthFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="heartRate" className="block text-sm font-medium text-gray-700">
            Heart Rate (BPM)
          </label>
          <input
            type="number"
            name="heartRate"
            id="heartRate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700">
            Blood Pressure
          </label>
          <input
            type="text"
            name="bloodPressure"
            id="bloodPressure"
            placeholder="120/80"
            pattern="\d{2,3}\/\d{2,3}"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            step="0.1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
            Current Medications
          </label>
          <textarea
            name="medications"
            id="medications"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="List your current medications and dosages"
          />
        </div>
      </div>

      <div>
        <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
          Current Symptoms
        </label>
        <textarea
          name="symptoms"
          id="symptoms"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Describe any symptoms you're experiencing"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center w-full md:w-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Save className="w-4 h-4 mr-2" />
        Save Health Information
      </button>
    </form>
  );
}